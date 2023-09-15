import type { Config } from "tailwindcss";
import COLORS from "./constants/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: COLORS,
    extend: {
      gridTemplateRows: {
        repeat: "repeat(auto-fill, minmax(150px, 1fr))",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border|ring|grid-col|grid-row)-(primary|secondary|text|[0-9])/,
    },
  ],
};
export default config;
