'use strict';

const cheerio = require('cheerio');
const { loadHTML, getPageFiles } = require('./helpers/utils');

const EXPECTED_NAV_LINKS = [
  { text: 'About', href: 'index.html' },
  { text: 'Publications', href: 'publications.html' },
  { text: 'Projects', href: 'projects.html' },
  { text: 'CV', href: 'cv.html' },
];

describe('Navigation', () => {
  const pages = getPageFiles();

  pages.forEach((page) => {
    describe(page, () => {
      let $;

      beforeAll(() => {
        const html = loadHTML(page);
        $ = cheerio.load(html);
      });

      it('contains exactly 4 navigation links', () => {
        expect($('nav ul li a').length).toBe(4);
      });

      EXPECTED_NAV_LINKS.forEach(({ text, href }) => {
        it(`has a nav link to "${href}" labelled "${text}"`, () => {
          const link = $(`nav ul li a[href="${href}"]`);
          expect(link.length).toBe(1);
          expect(link.text().trim()).toBe(text);
        });
      });

      it('marks exactly one nav link as active', () => {
        expect($('nav ul li a.active').length).toBe(1);
      });

      it('marks the correct page link as active', () => {
        const activeHref = $('nav ul li a.active').attr('href');
        expect(activeHref).toBe(page);
      });
    });
  });
});
