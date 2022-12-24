module.exports = {
    customSyntax: 'postcss-scss',
    overrides: [
        {
            files: ['**/*.vue'],
            customSyntax: 'postcss-html',
        },
    ],
    plugins: [
        'stylelint-scss',
    ],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-vue',
    ],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules: {
        indentation: null,
        'selector-class-pattern': null,
        'function-no-unknown': {
            ignoreFunctions: ['r'],
        },
        'string-quotes': 'single',
        'no-duplicate-selectors': true,
        'color-hex-case': 'lower',
        'color-hex-length': 'long',
        'color-named': 'never',
        'selector-combinator-space-after': 'always',
        'selector-attribute-quotes': 'always',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-brackets-space-inside': 'never',
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-colon-space-after': 'always',
        'number-leading-zero': 'always',
        'function-url-quotes': 'always',
        'font-weight-notation': 'numeric',
        'font-family-name-quotes': 'always-unless-keyword',
        'comment-whitespace-inside': 'always',
        'rule-empty-line-before': 'always',
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-before': 'always',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-colon-space-before': 'never',
        'media-feature-colon-space-after': 'always',
    },
};
