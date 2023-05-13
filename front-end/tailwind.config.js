/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			// default breakpoints but with 40px removed
			screens: {
				sm: '480px',
				md: '768px',
				lg: '1024px',
				xl: '1200px',
				'2xl': '1280px'
			}
		},
		extend: {
			colors: {
				sajuDark: '#070605',
				BrightGray: '#ECEDF0', // Used Hero Section
				VividYellow: '#F7DF14', // Used SVG stars
				Folly: '#FF0058', // Used Discount texts
				GhostWhite: '#F8F7FB', // Product Card Background, Sifarişinizi bir gündə çatdıraq Section
				UltramarineBlue: '#4B4EFC' // Bubbles e.x (footer)
			}
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
}
