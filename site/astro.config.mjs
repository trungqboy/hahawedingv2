import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/**
 * GitHub Pages (project site): https://USERNAME.github.io/TEN-REPO/
 * — Sửa USERNAME và TEN-REPO cho khớp repo GitHub của bạn.
 * Chạy local: npm run dev (base vẫn ok).
 */
const GITHUB_USER = 'trungqboy';
const GITHUB_REPO = 'hahawedingv2';

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base: `/${GITHUB_REPO}/`,
  integrations: [tailwind()],
});