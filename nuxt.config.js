export default {
    ssr: true,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Ngoc Long Nguyen',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                name: 'description',
                content: 'Personal site by Ngoc Long Nguyen',
            },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'author', content: 'Ngoc Long Nguyen' },
            { hid: 'og-site_name', property: 'og:site_name', content: 'nnl' },
            {
                hid: 'og-title',
                property: 'og:title',
                content: 'Ngoc Long Nguyen',
            },
            { hid: 'og-image', property: 'og:image', content: '/og/og.png' },
            { property: 'og:image:type', content: 'image/png' },
            { name: 'theme-color', content: '#fbfbfb' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'favicons/favicon.ico' },
            { rel: 'icon', href: 'favicons/favicon.ico', sizes: 'any' },
            { rel: 'shortcut icon', href: 'favicons/favicon.ico' },
            {
                rel: 'apple-touch-icon',
                href: 'favicons/apple-touch-icon.png',
                sizes: '180x180',
            },
            {
                rel: 'icon',
                href: 'favicons/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                rel: 'icon',
                href: 'favicons/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                rel: 'mask-icon',
                href: 'favicons/safari-pinned-tab.svg',
                color: '#5bbad5',
            },
            { rel: 'manifest', href: 'favicons/site.webmanifest' },
        ],
        script: [
            {
                src: 'https://kit.fontawesome.com/493dde0de6.js',
                crossorigin: 'anonymous',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['assets/scss/common/index.scss', 'assets/scss/partials/index.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        '@nuxtjs/style-resources',
        '@nuxtjs/google-fonts',
        '@nuxtjs/svg',
        '@nuxtjs/sitemap',
        'nuxt-purgecss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/sitemap'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    loading: { color: '#78b7bb' },

    styleResources: {
        scss: ['assets/scss/core/index.scss'],
    },

    googleFonts: {
        families: {
            Poppins: {
                wght: [300, 400, 500, 600, 700],
                ital: [300, 400, 500, 600, 700],
            },
        },
    },
};
