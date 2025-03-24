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
        'brush': ['"Brush Script MT"', 'cursive'],
        'artistic': ['"Dancing Script"', 'cursive'],
       },
    },
  },
  plugins: [tailwindTypography],
};

export default config;