const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
				black: "#000000",
				focus: "#BEF264",
				primary: {
					//... 50 to 900
					foreground: "#FFFFFF",
					DEFAULT: "#e6591d",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
			defaultTheme: "light", // default theme from the themes object
			layout: {
				spacingUnit: 4, // in px
			},
		}),
	],
};
