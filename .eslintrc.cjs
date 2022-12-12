module.exports = {
  "extends": [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  "overrides": [
    {
      "extends": [
        "prettier",
        "eslint:recommended",
      ],
      "files": [
        "**/*.js",
        "**/*.jsx",
      ],
      "plugins": [
        "prettier",
      ],
      "rules": {
        "comma-dangle": [
          "error",
          "only-multiline",
        ],

        // 알고리즘용
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "func-names": "off",
      },
    },
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": [
      "./tsconfig.json",
    ],
  },
  "plugins": [
    "@typescript-eslint",
    "prettier",
  ],
  "root": true,
  "rules": {
    "@typescript-eslint/no-empty-interface": "off",
    "comma-dangle": [
      2,
      "only-multiline",
    ],
    "import/no-extraneous-dependencies": [
      2,
      {
        "devDependencies": [
          "**/*.test.*",
          "**/*.stories.*",
          "**/*.config.*",
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "react/display-name": "off",
    "react/function-component-definition": [
      2,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": [
      2,
      {
        "custom": "ignore",
      },
    ],
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/no-unknown-property": [
      "error",
      {
        "ignore": [
          "css",
        ],
      },
    ],
  },
  "settings": {
    "import/resolver": {
      "typescript": {},
    },
  },
};