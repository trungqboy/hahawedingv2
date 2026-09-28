/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: ['bg-cream', 'text-cream', 'border-cream', 'hover:text-cream'],
  theme: {
    extend: {
      colors: {
        ivory: '#f7f4ef',
        cream: '#f3f0ea',
        charcoal: '#1a1a1a',
        champagne: '#c4a962',
        mist: '#e8e2d9',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
