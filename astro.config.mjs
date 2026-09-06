// Static output. No adapter yet: the course is plain HTML on Cloudflare Pages.
// Pages Functions and D1 (logged-in progress, bookmarks) are added later via
// the Cloudflare adapter, per the sol review's architecture answer.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://weeklyweights.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
});
