'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Reads an HTML file from the repository root and returns its contents as a string.
 * @param {string} filename - The file name relative to the repository root (e.g. 'index.html').
 * @returns {string} The raw HTML content of the file.
 */
function loadHTML(filename) {
  const filePath = path.join(__dirname, '..', '..', filename);
  return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Returns the list of all HTML page filenames in the repository root.
 * @returns {string[]} Array of HTML file names.
 */
function getPageFiles() {
  return ['index.html', 'publications.html', 'projects.html', 'cv.html'];
}

module.exports = { loadHTML, getPageFiles };
