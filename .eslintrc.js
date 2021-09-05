module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": ["error","single"],
         "indent": ["error", 2],
         "no-console": ["warn", { allow: ["warn", "error"] }]
    },
    "settings": {
        "react": {
            "version": "latest",
        },
    },
};
