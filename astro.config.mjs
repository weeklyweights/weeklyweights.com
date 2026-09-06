// Cloudflare Workers with static assets (R61, R69). Every page is prerendered
// at build time and served as a static file; the Worker only runs for routes
// that opt out of prerendering (sign-in, account, progress — the accounts
// build). Zero client-side JavaScript on lesson pages stays the rule.
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://weeklyweights.com',
  output: 'static',
  adapter: cloudflare({ imageService: 'compile' }),
  // Astro's built-in session store (Cloudflare KV) is off: learner sessions
  // are our own, in D1, per docs/auth-setup.md in the private repo.
  session: false,
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
});
