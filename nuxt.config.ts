// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    rootDir: "bufs-sample",
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        'nuxt-icon',
        "nuxt-lodash",
        'nuxt-headlessui',
    ],
    googleFonts: {
        families: {
            "Noto Sans JP": [100, 300, 400, 500, 700, 900],
        },
        display: "swap",
        prefetch: true,
        preconnect: true,
        preload: true,
        download: false,
        useStylesheet: true,
    },
    runtimeConfig: {
        public: {
            siteName: "テストシステム",
        },
    },
    headlessui: {
        prefix: '',
    },
    app: {
        head: {
            script: [
                {
                src: '/vendor/preline/dist/preline.js',
                body: true,
                defer: true
                }
            ]
        },
    },
})
