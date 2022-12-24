module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
        babelOptions: {
            parserOpts: {
                plugins: [
                    'decorators-legacy',
                    'typescript',
                ],
            },
        },
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        '@nuxtjs/eslint-config-typescript',
    ],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
        'space-before-function-paren': ['error', 'never'],
        '@typescript-eslint/no-inferrable-types': 0,
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/valid-v-slot': [
            'error',
            { allowModifiers: true },
        ],
    },
    globals: {
        _: true,
    },
};
