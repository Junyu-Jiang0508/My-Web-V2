# Junyu Jiang — Academic Website

Source code for my academic website, built with Astro & Python.

![Screenshot](screenshot.png)

## Project Structure

```
/
├── public/           # Static assets (favicon, avatar, CV)
├── src/
│   ├── components/   # Astro components (Header, SelectedPubs, etc.)
│   ├── data/        # JSON data (profile, publications, research)
│   ├── layouts/
│   └── pages/
├── scripts/         # Python automation
│   ├── build_data.py    # YAML → research.json
│   ├── update_pubs.py  # BibTeX → publications.json
│   └── sync_cv.py      # CV.pdf → public/
├── my_pubs.bib      # BibTeX source for publications
├── data_source/     # YAML sources
└── CV/              # LaTeX CV source
```

## Commands

| Command         | Action                                              |
| :-------------- | :-------------------------------------------------- |
| `npm install`   | Install dependencies                                |
| `npm run dev`   | Start dev server at `localhost:4321`                |
| `npm run build` | Build production site to `./dist/`                  |
| `npm run gen`   | Regenerate data from BibTeX/YAML sources           |
| `npm run sync:cv` | Copy CV.pdf to public after LaTeX compile         |

**Note:** `npm run build` uses pre-generated JSON files. When you update `my_pubs.bib` or `data_source/projects.yaml`, run `npm run gen` locally and commit the updated `src/data/*.json` files.
