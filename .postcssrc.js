// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    // to edit target browsers: use "browserslist" field in package.json
    // require('autoprefixer')({ browsers: 'ios >= 8' }),
    require('postcss-cssnext')({
        browsers: ['last 2 versions', '> 5%']
    }),
    // px to rem in mobile
    require('postcss-px2rem')({
      remUnit: 75
    })
  ]
}
