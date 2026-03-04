#!/usr/bin/env python3
"""
Sync CV.pdf from CV/ folder to public/ for the website.
Run after compiling your LaTeX CV: python scripts/sync_cv.py
"""

from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
CV_SOURCE = PROJECT_ROOT / "CV" / "CV.pdf"
PUBLIC_DEST = PROJECT_ROOT / "public" / "cv.pdf"

if not CV_SOURCE.exists():
    print(f"[ERROR] CV not found: {CV_SOURCE}")
    exit(1)

import shutil
shutil.copy2(CV_SOURCE, PUBLIC_DEST)
print(f"[OK] CV synced: {CV_SOURCE} -> {PUBLIC_DEST}")
