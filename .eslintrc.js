// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    extends: 'standard',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  // https://github.com/standard
  extends: 'standard',

  env: {
    browser: true,
    node: true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  /**
  * add your custom rules here
  * "off" -> 0
  * "warn" -> 1
  * "error" -> 2
  */
  'rules': {
    'eol-last': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'arrow-parens': 0,
    'array-bracket-spacing': [2, "always"],
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, { "before": false, "after": true }],
    "eqeqeq": [2, "allow-null"],
    // 要求在数组括号内使用一个或多个空格、或折行
    "array-bracket-spacing": 0
  }
}
