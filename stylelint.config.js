module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // 非手动编写的样式文件忽略stylelint校验
  ignoreFiles: [
    'assets/styles/element/theme/index.css',
    'assets/fonts/iconfont.css',
    'assets/colorFonts/iconfont.css',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {},
}
