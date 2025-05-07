const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
			colors: {
				navy: "#001F3F",
				zinc: {
					...defaultTheme.colors.zinc,
					850: "#1f2937",
				},
			},
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-outfit)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
				mono: ["var(--font-space)", ...defaultTheme.fontFamily.mono],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 1.5s ease-in-out forwards",
				title: "title 1.5s ease-out forwards",
				"fade-left": "fade-left 1.5s ease-in-out forwards",
				"fade-right": "fade-right 1.5s ease-in-out forwards",
				glow: "glow 10s linear infinite",
				typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
				"bounce-slow": "bounce 3s ease-in-out infinite",
				"slide-in-bottom": "slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
				"slide-in-left": "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
				"slide-in-right": "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(20px)",
						opacity: "0%",
					},
					"100%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-20px)",
						opacity: "0%",
					},
					"100%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
						transform: "translateY(10px)",
					},
					"100%": {
						"line-height": "100%",
						"letter-spacing": "normal",
						opacity: "100%",
						transform: "translateY(0)",
					},
				},
				glow: {
					"0%": {
						backgroundPosition: "0% 50%",
					},
					"100%": {
						backgroundPosition: "200% 50%",
					},
				},
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden"
					},
					"100%": {
						width: "100%"
					}
				},
				blink: {
					"50%": {
						borderColor: "transparent"
					},
					"100%": {
						borderColor: "white"
					}
				},
				"slide-in-bottom": {
					"0%": {
						transform: "translateY(20px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "1"
					}
				},
				"slide-in-left": {
					"0%": {
						transform: "translateX(-20px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1"
					}
				},
				"slide-in-right": {
					"0%": {
						transform: "translateX(20px)",
						opacity: "0"
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1"
					}
				}
			},
			boxShadow: {
				'glow': '0 0 15px rgba(255, 255, 255, 0.3)',
			},
		},
	},
	plugins: [
		function() {
			try {
				return require("@tailwindcss/typography");
			} catch (e) {
				console.warn("@tailwindcss/typography plugin not found, skipping...");
				return {};
			}
		}(),
		function() {
			try {
				return require("tailwindcss-debug-screens");
			} catch (e) {
				console.warn("tailwindcss-debug-screens plugin not found, skipping...");
				return {};
			}
		}(),
	],
};
