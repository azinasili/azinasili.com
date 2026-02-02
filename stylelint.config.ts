import type { Config } from 'stylelint';

export default {
  ignoreFiles: ['.next/**', 'out/**', 'build/**'],
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Expected class name to be kebab-case or camelCase',
      },
    ],
  },
} satisfies Config;
