// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			link: [ { rel: "icon", type: "image/x-icon", href: "/tawzef-fav.png" } ],
			script: [
				{
					src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0&appId=285360127173271",
				},
			],
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	imports: {
		dirs: ["composables"],
	},
	css: ["~/assets/css/main.css"],
	modules: [
		"@nuxtjs/i18n",
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"@nuxtjs/google-fonts",
		"nuxt-icon",
		"shadcn-nuxt",
		"@nuxtjs/color-mode",
		"nuxt-swiper",
	],
	i18n: {
		vueI18n: "./locale/i18n.config.ts",
		defaultLocale: "en",
		strategy: "prefix",
		detectBrowserLanguage: {
			useCookie: true,
		},
		locales: [
			{
				code: "en",
				iso: "en-US",
				name: "English",
				file: "./locale/en.json",
				direction: "ltr",
			},
			{
				code: "ar",
				iso: "ar",
				name: "Arabic",
				file: "./locale/ar.json",
				direction: "rtl",
			},
		],
	},
	googleFonts: {
		preload: true,
		families: {
			"IBM Plex Sans Arabic": [400, 500, 600, 700],
			Cairo: [ 400, 500, 600, 700, 800, 900, 1000 ],
			"Sevillana": [ 400],
		},
	},
	shadcn: {
		prefix: "ui",
	},
})
