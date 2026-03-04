#!/usr/bin/env python3
"""
Update publications.json from BibTeX source.
Reads my_pubs.bib, parses with bibtexparser, and overwrites src/data/publications.json.
Run: python scripts/update_pubs.py
Dependencies: pip install bibtexparser
"""

import json
import re
from pathlib import Path

try:
    import bibtexparser
    from bibtexparser.bparser import BibTexParser
    from bibtexparser.customization import homogenize_latex_encoding
except ImportError:
    print("[ERROR] bibtexparser is required. Run: pip install bibtexparser")
    exit(1)

# Paths relative to project root
PROJECT_ROOT = Path(__file__).resolve().parent.parent
BIB_PATH = PROJECT_ROOT / "my_pubs.bib"
OUTPUT_PATH = PROJECT_ROOT / "src" / "data" / "publications.json"


def parse_bib_file(bib_path: Path) -> list[dict]:
    """Parse BibTeX file and return list of entry dicts."""
    if not bib_path.exists():
        print(f"[ERROR] BibTeX file not found: {bib_path}")
        exit(1)

    with open(bib_path, encoding="utf-8") as f:
        content = f.read()

    parser = BibTexParser(common_strings=True)
    parser.customization = homogenize_latex_encoding
    parser.ignore_nonstandard_types = False
    bib_db = bibtexparser.loads(content, parser)

    return bib_db.entries


def clean_latex(text: str) -> str:
    """Remove LaTeX formatting for plain text display."""
    if not text:
        return ""
    # Remove BibTeX braces: {X} -> X (handle nested by repeated replacement)
    prev = None
    while prev != text:
        prev = text
        text = re.sub(r"\{([^{}]*)\}", r"\1", text)
    text = text.replace("{", "").replace("}", "")
    # \ast -> *
    text = text.replace("\\ast", "*")
    # \_ -> _
    text = text.replace("\\_", "_")
    # Collapse multiple spaces
    text = re.sub(r"\s+", " ", text).strip()
    return text


def bib_entry_to_pub(entry: dict) -> dict:
    """Convert a single BibTeX entry to our publications.json format."""
    # Author: BibTeX uses "and", we use " & "
    authors = entry.get("author", "")
    if isinstance(authors, list):
        authors = " and ".join(authors)
    authors = authors.replace(" and ", " & ")
    authors = clean_latex(authors)

    # Venue: booktitle (conference), journal (article), school (thesis), or note (unpublished)
    venue = (
        entry.get("booktitle")
        or entry.get("journal")
        or entry.get("school")
        or entry.get("note")
        or ""
    )
    venue = clean_latex(str(venue).strip().strip("{}"))

    # Year
    year_str = entry.get("year", "")
    year = int(year_str) if year_str and str(year_str).isdigit() else None

    # Links - clean LaTeX, braces, and strip .git from GitHub URLs (browser-friendly)
    def clean_url(s: str) -> str:
        url = clean_latex(str(s).strip().strip("{}"))
        if url.endswith(".git") and "github.com" in url:
            url = url[:-4]  # Remove .git for browser navigation
        return url

    links = {}
    if entry.get("code"):
        links["code"] = clean_url(entry["code"])
    if entry.get("url"):
        links["pdf"] = clean_url(entry["url"])
    if entry.get("data"):
        links["data"] = clean_url(entry["data"])

    # Highlight
    highlight_val = entry.get("highlight", "false")
    highlight = str(highlight_val).lower().strip("{}") in ("true", "1", "yes")

    return {
        "title": clean_latex(entry.get("title", "").strip().strip("{}")),
        "authors": authors,
        "venue": venue,
        "year": year,
        "links": links if links else {"code": None},
        "highlight": highlight,
    }


def categorize_entries(entries: list[dict]) -> dict:
    """Group entries into Conference Papers, Working Papers, Undergraduate Thesis."""
    categories = {
        "Conference Papers": [],
        "Working Papers": [],
        "Undergraduate Thesis": [],
    }

    for entry in entries:
        pub = bib_entry_to_pub(entry)
        entry_type = entry.get("ENTRYTYPE", "").lower()

        if entry_type == "inproceedings":
            categories["Conference Papers"].append(pub)
        elif entry_type in ("mastersthesis", "phdthesis"):
            categories["Undergraduate Thesis"].append(pub)
        else:
            # unpublished, article, misc, etc. -> Working Papers
            categories["Working Papers"].append(pub)

    # Sort each category by year descending
    for key in categories:
        categories[key].sort(key=lambda p: (p["year"] or 0), reverse=True)

    return categories


def main():
    print(f"[INFO] Reading {BIB_PATH}")
    entries = parse_bib_file(BIB_PATH)
    print(f"[INFO] Parsed {len(entries)} entries")

    categorized = categorize_entries(entries)

    # Ensure links structure: if empty, use {"code": null}
    for cat_entries in categorized.values():
        for pub in cat_entries:
            links = pub.get("links", {})
            if not links or links == {"code": None}:
                pub["links"] = {"code": None}
            elif "code" not in links and not any(links.values()):
                pub["links"] = {"code": None}

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(categorized, f, ensure_ascii=False, indent=2)

    total = sum(len(v) for v in categorized.values())
    print(f"[OK] publications.json updated: {total} publications written to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
