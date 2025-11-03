import nx from '@nx/eslint-plugin';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';        
import angular from 'angular-eslint'; 

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/node_modules', '**/coverage', '**/.nx', '**/tmp'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: ['tsconfig.base.json', 'apps/*/tsconfig.json', 'libs/**/tsconfig.json'],
        createDefaultProgram: false,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@angular-eslint': angular,
    },
    rules: {
      // TypeScript Rules
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // General JS/TS rules
      'no-console': 'off',
      'no-debugger': 'off',
      'prefer-const': 'warn',
      'no-var': 'error',
      eqeqeq: 'warn',
      curly: 'off',
      'no-throw-literal': 'off',
      'prefer-arrow-callback': 'off',
      'arrow-body-style': 'off',
    },
  },
  {
    files: ['**/*.component.ts'],
    rules: {
      '@angular-eslint/component-class-suffix': 'warn',
      '@angular-eslint/component-selector': [
        'warn',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
    },
  },
  {
    files: ['**/*.directive.ts'],
    rules: {
      '@angular-eslint/directive-class-suffix': 'warn',
      '@angular-eslint/directive-selector': [
        'warn',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': angular,
    },
    rules: {
      '@angular-eslint/template/no-negated-async': 'off',
      '@angular-eslint/template/use-track-by-function': 'off',
      '@angular-eslint/template/accessibility-label-for': 'off',
      '@angular-eslint/template/accessibility-alt-text': 'off',
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/mouse-events-have-key-events': 'off',
    },
  },
  {
    files: ['**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$',
            'apps/portal/src/app/app.routes.ts'
          ],
          depConstraints: [
            // App can depend on everything
            {
              sourceTag: 'type:app',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:shell',
                'type:ui',
                'type:data-access',
                'type:util',
                'scope:shared'
              ],
            },
            // Shell can depend on feature, ui, data-access, util
            {
              sourceTag: 'type:shell',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:data-access',
                'type:util',
                'scope:shared'
              ],
            },
            // Feature can depend on ui, data-access, util
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: ['type:ui', 'type:data-access', 'type:util', 'scope:shared'],
            },
            // UI can only depend on util
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: ['type:util', 'scope:shared'],
            },
            // Data-access can only depend on util
            {
              sourceTag: 'type:data-access',
              onlyDependOnLibsWithTags: ['type:data-access', 'type:util', 'scope:shared'],
            },
            // Util can only depend on other utils
            {
              sourceTag: 'type:util',
              onlyDependOnLibsWithTags: ['type:util', 'scope:shared'],
            },
            // Scope restrictions - features can't depend on each other directly
            {
              sourceTag: 'scope:auth',
              onlyDependOnLibsWithTags: ['scope:auth', 'scope:shared'],
            },
            {
              sourceTag: 'scope:characters-list',
              onlyDependOnLibsWithTags: ['scope:characters-list', 'scope:shared'],
            },
            {
              sourceTag: 'scope:character-detail',
              onlyDependOnLibsWithTags: ['scope:character-detail', 'scope:shared'],
            },
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
          ],
        },
      ],
    },
  },
];
