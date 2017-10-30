// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    // to edit target browsers: use "browserslist" field in package.json
    // require('autoprefixer')({ browsers: 'ios >= 8' }),
    require('postcss-cssnext')({
        browsers: ['last 7 versions', '> 5%']
    }),
    // px to rem in mobile global 如果有基准值 html { font-size: 75PX !important } 请放在vue-loader.config.js配置中前提是.vue文件，文件拆分了失效 此处是全局转换成rem 会将基准值转换成 rem
    // `Px` or `PX` is ignored by `postcss-pxtorem` but still accepted by browsers
    // require('postcss-px2rem')({
    //   remUnit: 75
    // }),
    // or postcss-pxtore is same postcss-px2rem but postcss-pxtorem is better
    require('postcss-pxtorem')({ rootValue: 75, propList: [ '*' ] })
  ]
}
