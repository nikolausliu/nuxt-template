module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'prettier', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off',
  },
}
