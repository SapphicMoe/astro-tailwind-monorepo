import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', '../../packages/components/**/*.astro'],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;