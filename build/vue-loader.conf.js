var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  // in .vue file px to rem .vue文件拆分了失效 全局 px 转换 rem 在.postcssrc.js 中配置 
	// postcss: [
  //   require('postcss-px2rem')({ remUnit: 75 })
  // ]
}
