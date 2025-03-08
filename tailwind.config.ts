import type { Config } from 'tailwindcss';
import tailwindTypography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography],
};

export default config;