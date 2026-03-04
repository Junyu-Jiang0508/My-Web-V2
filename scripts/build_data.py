#!/usr/bin/env python3
"""
Build research data from YAML/BibTeX sources into JSON for the Astro site.
Run: python scripts/build_data.py
Dependencies: pip install pyyaml
"""

import json
import os
from pathlib import Path

try:
    import yaml
except ImportError:
    print("[ERROR] pyyaml is required. Run: pip install pyyaml")
    exit(1)

# Paths relative to project root
PROJECT_ROOT = Path(__file__).resolve().parent.parent
DATA_SOURCE_DIR = PROJECT_ROOT / "data_source"
OUTPUT_PATH = PROJECT_ROOT / "src" / "data" / "research.json"


def load_projects_yaml():
    """Load projects from data_source/projects.yaml."""
    yaml_path = DATA_SOURCE_DIR / "projects.yaml"
    if not yaml_path.exists():
        print(f"[WARN] {yaml_path} not found. Using empty list.")
        return []

    with open(yaml_path, encoding="utf-8") as f:
        data = yaml.safe_load(f)
    return data if isinstance(data, list) else []


def load_references_bib():
    """Load papers from data_source/references.bib (optional, simple regex parse)."""
    bib_path = DATA_SOURCE_DIR / "references.bib"
    if not bib_path.exists():
        return []

    entries = []
    with open(bib_path, encoding="utf-8") as f:
        content = f.read()

    # Simple BibTeX entry extraction (for demo; use bibtexparser for full support)
    import re
    pattern = r"@\w+\{([^,]+),\s*([^}]+)\}"
    for match in re.finditer(pattern, content, re.DOTALL):
        key, fields_str = match.group(1), match.group(2)
        fields = {}
        for field_match in re.finditer(r"(\w+)\s*=\s*[{\"]([^}\"]*)[}\"]", fields_str):
            fields[field_match.group(1).lower()] = field_match.group(2).strip()
        if fields:
            entries.append({
                "title": fields.get("title", ""),
                "description": fields.get("abstract", ""),
                "image": "",
                "links": {
                    "paper": fields.get("url", ""),
                    "slides": "",
                    "code": "",
                    "demo": "",
                },
                "tags": [],
                "date": fields.get("year", "") + "-" + fields.get("month", "01").zfill(2) + "-01",
            })
    return entries


def strip_git_from_url(url: str) -> str:
    """Remove .git suffix from GitHub URLs for browser-friendly links."""
    if url and url.endswith(".git") and "github.com" in url:
        return url[:-4]
    return url or ""


def ensure_links_structure(project: dict) -> dict:
    """Ensure links has all expected keys and strip .git from GitHub URLs."""
    default_links = {"paper": "", "code": "", "demo": "", "slides": ""}
    links = project.get("links", {})
    if isinstance(links, dict):
        for k, v in default_links.items():
            if k not in links:
                links[k] = v
            elif links[k] and k in ("code", "paper", "demo", "slides"):
                links[k] = strip_git_from_url(str(links[k]))
    else:
        links = default_links.copy()
    project["links"] = links
    return project


def main():
    projects = load_projects_yaml()
    bib_entries = load_references_bib()

    # Merge (projects take precedence; bib entries appended if no overlap)
    seen_titles = {p.get("title", "").lower() for p in projects}
    for entry in bib_entries:
        if entry.get("title", "").lower() not in seen_titles:
            projects.append(entry)
            seen_titles.add(entry.get("title", "").lower())

    # Sort by date descending
    def sort_key(p):
        d = p.get("date", "")
        return d if d else "0000-00-00"

    projects.sort(key=sort_key, reverse=True)

    # Normalize structure
    for p in projects:
        ensure_links_structure(p)
        if "tags" not in p:
            p["tags"] = []
        if "image" not in p:
            p["image"] = ""

    # Write output
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(projects, f, ensure_ascii=False, indent=2)

    print(f"[OK] Data build complete: {len(projects)} projects processed.")


if __name__ == "__main__":
    main()
