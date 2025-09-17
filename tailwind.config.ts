import tailwindTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        artistic: ['"Dancing Script"', 'cursive'],
        brush: ['"Brush Script MT"', 'cursive'],
      },
    },
  },
  plugins: [tailwindTypography],
};

export default config;
