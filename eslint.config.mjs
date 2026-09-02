import jsdoc from 'eslint-plugin-jsdoc';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/require-jsdoc': [
        'error',
        {
          contexts: [
            'MethodDefinition',
            'TSMethodSignature',
            'TSDeclareMethod',
          ],
        },
      ],
    },
  },
];
