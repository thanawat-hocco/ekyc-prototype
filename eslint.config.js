import eslingJs from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactEslint from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [eslingJs.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: reactEslint,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'arrow-body-style': 'off',
      'import/no-anonymous-default-export': 'off',
      'import/no-absolute-path': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'max-len': [
        'warn',
        {
          code: 120,
          tabWidth: 2,
        },
      ],
      'import/prefer-default-export': 'off',
      'react-hooks/rules-of-hooks': 'warn',
      'consistent-return': 'off',
      'no-param-reassign': 'warn',
      'react-hooks/exhaustive-deps': 'off',
      'no-unneeded-ternary': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: ['../*'],
        },
      ],
      'no-console': 'warn', // For temporary debuging and shoud be remove when deploy to prod env.
      curly: 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'import/extensions': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-constant-binary-expression': 'error',
      'no-empty-static-block': 'error',
      'react/jsx-key': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/no-children-prop': 'error',
      'react/jsx-props-no-spread-multi': 'warn',
    },
  },
);
