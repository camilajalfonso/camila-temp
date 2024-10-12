// @ts-check
import process from 'node:process'
import antfu from '@antfu/eslint-config'

const isProd = process.env.NODE_ENV === 'production'

export default antfu({
  // Configures for antfu's config
  rules: {
    'no-console': isProd ? ['error', { allow: ['info', 'warn', 'error'] }] : ['warn', { allow: ['info', 'warn', 'error', 'group', 'groupEnd', 'groupCollapsed'] }],
  },
  // unocss: true,
  // formatters: true,
})
/*
  // original setup
  import withNuxt from './.nuxt/eslint.config.mjs'
  export default withNuxt(
  // Your custom configs here
)
*/
