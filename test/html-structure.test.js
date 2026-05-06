'use strict';

const cheerio = require('cheerio');
const { loadHTML, getPageFiles } = require('./helpers/utils');

describe('HTML structure', () => {
  const pages = getPageFiles();

  pages.forEach((page) => {
    describe(page, () => {
      let $;

      beforeAll(() => {
        const html = loadHTML(page);
        $ = cheerio.load(html);
      });

      it('declares DOCTYPE html', () => {
        const html = loadHTML(page);
        expect(html.trim().toLowerCase()).toMatch(/^<!doctype html>/);
      });

      it('sets lang="en" on <html>', () => {
        expect($('html').attr('lang')).toBe('en');
      });

      it('includes UTF-8 charset meta tag', () => {
        const charset = $('meta[charset]').attr('charset');
        expect(charset.toLowerCase()).toBe('utf-8');
      });

      it('includes a viewport meta tag', () => {
        const viewport = $('meta[name="viewport"]').attr('content');
        expect(viewport).toBeTruthy();
        expect(viewport).toContain('width=device-width');
      });

      it('has a non-empty <title>', () => {
        const title = $('title').text().trim();
        expect(title.length).toBeGreaterThan(0);
      });

      it('links to styles.css', () => {
        const href = $('link[rel="stylesheet"]').attr('href');
        expect(href).toBe('styles.css');
      });

      it('contains a <header> element', () => {
        expect($('header').length).toBe(1);
      });

      it('contains a <nav> element inside <header>', () => {
        expect($('header nav').length).toBe(1);
      });

      it('contains a <main> element', () => {
        expect($('main').length).toBe(1);
      });

      it('has an <h1> inside <main>', () => {
        expect($('main h1').length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
