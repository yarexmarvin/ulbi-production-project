module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
        {
            files: ['**/src/**/*.test.tsx', '**/src/**/*.test.ts'],
            rules: {
                "i18next/no-literal-string": 'off'
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "rules": {
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-unused-vars": 'warn',
        "@typescript-eslint/prefer-includes": "off",
        "@typescript-eslint/semi": "off",
        "no-tabs": 0,
        "react/prop-types": 0,
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", '.tsx'] }],
        "import/no-unresolved": 'off',
        "import/prefer-default-export": 'off',
        "react/display-name": 'off',
        "i18next/no-literal-string": ['error', { markupOnly: true, ignoreAttribute: ['data-testid'] }]
    },
};
