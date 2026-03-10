#!/bin/sh
# Pre-commit hook: validate YAML frontmatter in blog markdown files.
# Prevents committing files with corrupted frontmatter (e.g. "## title:" or missing closing "---").

EXIT_CODE=0

for file in $(git diff --cached --name-only --diff-filter=ACM | grep '^src/content/blog/.*\.md$'); do
  # Check: first line must be exactly "---"
  first_line=$(head -n 1 "$file")
  if [ "$first_line" != "---" ]; then
    echo "ERROR: $file — first line is not '---' (got: '$first_line')"
    EXIT_CODE=1
    continue
  fi

  # Check: second line must NOT be empty (no blank line after opening ---)
  second_line=$(sed -n '2p' "$file")
  if [ -z "$second_line" ]; then
    echo "ERROR: $file — blank line after opening '---' (frontmatter corrupted)"
    EXIT_CODE=1
    continue
  fi

  # Check: there must be a closing "---" within the first 20 lines
  closing=$(sed -n '2,20p' "$file" | grep -n '^---$' | head -n 1)
  if [ -z "$closing" ]; then
    echo "ERROR: $file — no closing '---' found in frontmatter"
    EXIT_CODE=1
    continue
  fi

  # Check: no "## " prefix on frontmatter fields
  closing_line=$(echo "$closing" | cut -d: -f1)
  actual_closing=$((closing_line + 1))
  bad_field=$(sed -n "2,${actual_closing}p" "$file" | grep '^## ')
  if [ -n "$bad_field" ]; then
    echo "ERROR: $file — frontmatter field has '## ' prefix: $bad_field"
    EXIT_CODE=1
  fi
done

if [ $EXIT_CODE -ne 0 ]; then
  echo ""
  echo "Frontmatter validation failed. Fix the above errors before committing."
  echo "Tip: frontmatter must look like:"
  echo "  ---"
  echo "  title: \"...\""
  echo "  date: YYYY-MM-DD"
  echo "  ---"
fi

exit $EXIT_CODE
