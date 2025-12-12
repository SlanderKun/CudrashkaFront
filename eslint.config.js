import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import pluginMobx from "eslint-plugin-mobx"

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { mobx: pluginMobx },
    extends: [
      pluginMobx.flatConfigs.recommended,
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "mobx/exhaustive-make-observable": "warn",
      "mobx/unconditional-make-observable": "error",
      "mobx/missing-make-observable": "error",
      "mobx/missing-observer": "warn"
    }
  },
])
