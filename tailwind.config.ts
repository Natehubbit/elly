import type { Config } from "tailwindcss";
import COLORS from "./constants/colors";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				repeat: "repeat(auto-fill, minmax(150px, 1fr))",
			},
			colors: COLORS,
			backgroundImage: {
				footer: "url(/wave.svg)",
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
