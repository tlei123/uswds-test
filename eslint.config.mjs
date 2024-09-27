import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  { files: ['src/**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  configPrettier,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'linebreak-style': 'off',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['webpack.config.js'],
    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
      },
    },
  },
];
