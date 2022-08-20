module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // 'arrow-body-style': ['error', 'as-needed'],
    // 'no-prototype-builtins': 0,
    // 'no-unused-vars': 0,
    // 'no-console': 0,
    // 'no-new': 0,
    // 'no-plusplus': 0,
    // 'no-underscore-dangle': 0,
    // 'no-unused-expressions': 0,
    // 'no-throw-literal': 0,
    // 'react/forbid-prop-types': 0,
    // 'react/prop-types': 0,
    // 'react/require-default-props': 0,
    // 'react/default-props-match-prop-types': 0,
    // 'react/jsx-max-props-per-line': [
    //   'error',
    //   {
    //     maximum: 1,
    //     when: 'multiline'
    //   }
    // ],
    // 'react/destructuring-assignment': 0,
    // 'react/sort-comp': 0,
    // 'jsx-a11y/label-has-associated-control': 0,
    // 'jsx-a11y/label-has-for': 0,
    // 'jsx-a11y/control-has-associated-label': 0,
    // 'jsx-a11y/no-static-element-interactions': 0,
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'jsx-a11y/anchor-is-valid': 0,
    // 'react/jsx-filename-extension': 0,
    // 'react/jsx-one-expression-per-line': 0,
    // 'react/prefer-stateless-function': 0,
    // 'no-alert': 0,
    // 'no-case-declarations': 0,
    // 'import/prefer-default-export': 0,
    // // "import/no-extraneous-dependencies": 0,
    // 'import/no-cycle': 0,
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    // 'import/extensions': 0,
    // 'import/no-named-as-default-member': 0,
    // 'import/no-named-as-default': 0,
    // 'no-mixed-operators': 0,
    // 'no-use-before-define': [
    //   0
    // ],
    // 'jsx-a11y/no-noninteractive-element-interactions': 0,
    // 'no-bitwise': 0,
    // 'default-case': 0,
    // 'import/named': 0,
    // curly: 'error',
    // 'jsx-a11y/no-autofocus': 0,
    // 'max-len': [
    //   'error',
    //   {
    //     code: 120
    //   }
    // ],
    // 'react/state-in-constructor': 0,
    // 'react/jsx-props-no-spreading': 0,
    // 'react/static-property-placement': 0,
    // 'react/no-unescaped-entities': 0,
    // 'no-multiple-empty-lines': [
    //   'error',
    //   {
    //     max: 2,
    //     maxEOF: 1,
    //     maxBOF: 0
    //   }
    // ],
    // indent: [
    //   2,
    //   2,
    //   {
    //     SwitchCase: 1
    //   }
    // ],
    // 'class-methods-use-this': 0,
    // 'func-names': 0,
    // 'react/jsx-no-bind': 0,
    // // "sort-keys": ["error", "asc", {"caseSensitive": true, "natural": true, "minKeys": 2}],
    // // "sort-class-members/sort-class-members": [2],
    // 'object-curly-newline': ['error', {
    //   ObjectExpression: { consistent: true, minProperties: 3 },
    //   ObjectPattern: { multiline: true, minProperties: 3 },
    //   ImportDeclaration: { consistent: true },
    //   ExportDeclaration: { multiline: true, minProperties: 3 }
    // }],
    // 'react/jsx-sort-props': ['error', {
    //   reservedFirst: false
    // }],
    // 'no-nested-ternary': 0
  }
}
