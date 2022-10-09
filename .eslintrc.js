module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'vue/html-closing-bracket-newline': [
            'warn',
            {
                multiline: 'never'
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-v-text-v-html-on-component': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'prettier/prettier': [
            'warn',
            {
                semi: true,
                trailingComma: 'none',
                singleQuote: true,
                printWidth: 155,
                tabWidth: 4,
                endOfLine: 'auto',
                bracketSameLine: true,
                arrowParens: 'avoid',
                singleAttributePerLine: true,
                htmlWhitespaceSensitivity: 'ignore'
            }
        ],
        '@typescript-eslint/no-inferrable-types': 'off'
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                mocha: true
            }
        }
    ]
};
