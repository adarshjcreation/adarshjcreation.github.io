# Test Folder Overview

This folder contains automated tests for the [Adarsh Jain personal website](https://adarshjcreation.github.io). The tests validate the structure, correctness, and consistency of the static HTML pages that make up the site.

---

## 📂 Structure

```
test/
├── html-structure.test.js   # Tests for HTML structure and required elements
├── navigation.test.js       # Tests for navigation links and active states
├── fixtures/
│   └── sample-page.html     # Sample HTML page used as a reference fixture
└── helpers/
    └── utils.js             # Utility functions shared across test files
```

---

## 🔑 Key Files

| File | Purpose |
|------|---------|
| `html-structure.test.js` | Validates that each page declares `<!DOCTYPE html>`, sets `lang="en"`, includes UTF-8 charset and viewport meta tags, has a non-empty `<title>`, links to `styles.css`, and contains the expected `<header>`, `<nav>`, `<main>`, and `<h1>` elements. |
| `navigation.test.js` | Checks that every page exposes exactly four navigation links pointing to the correct pages (`index.html`, `publications.html`, `projects.html`, `cv.html`) and that each page marks its own link as the single active entry. |
| `fixtures/sample-page.html` | A minimal, well-formed HTML page that mirrors the site's standard structure. Used as a reference when writing or debugging tests. |
| `helpers/utils.js` | Exports `loadHTML(filename)` (reads an HTML page from the repository root) and `getPageFiles()` (returns the list of all page filenames), keeping test files concise and DRY. |

---

## 🛠️ Testing Framework

| Tool | Role |
|------|------|
| [Jest](https://jestjs.io/) | Test runner and assertion library |
| [Cheerio](https://cheerio.js.org/) | Server-side HTML parsing — used to query DOM elements in test assertions |

---

## ▶️ Running the Tests

Install dependencies (first time only):

```bash
npm install
```

Run all tests:

```bash
npm test
```

Expected output when everything is correct:

```
 PASS  test/navigation.test.js
 PASS  test/html-structure.test.js

Test Suites: 2 passed, 2 total
Tests:       68 passed, 68 total
```

---

## 🎯 What the Tests Cover

- **HTML structure** — `<!DOCTYPE html>`, `lang` attribute, `charset`, `viewport`, `<title>`, stylesheet link, and required landmark elements (`<header>`, `<nav>`, `<main>`, `<h1>`).
- **Navigation correctness** — presence of all four nav links with correct `href` values and labels, and correct highlighting of the active page link.

These checks guard against copy-paste errors (e.g., a page accidentally showing the wrong active nav item or an incorrect `<title>`), ensuring a consistent and accessible experience across all pages.
