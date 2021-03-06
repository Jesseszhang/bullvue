### 总原则
1. tab键统一为2个空格，已配置好[editorconfig](http://editorconfig.org/)文件。
2. 优先使用[ECMAScript6](http://es6.ruanyifeng.com/)。
3. 项目使用[standardjs](https://standardjs.com/readme-zhcn.html)来规范js代码，[stylelintrc](https://stylelint.io/)来规范样式代码，[markdownlint](https://github.com/DavidAnson/markdownlint) 来规范文档。
4. 在此项目.vue文件被拆分成.tpl .js .scss三个文件。

### 命名规范
1. 文件夹命名：文件夹名小驼峰命名法，eg：demo。
2. 文件命名：只能包含字母和数字，采用驼峰命名，首页一般采用index命名，eg：myDemo.js。
3. 图片命名：只能包含字母和数字，只能小写，多个词用“-”连接，eg：index-banner.jpg。
4. css/scss 文件命名：css按功能命名：global.css（全局使用）、common.css（部分页面可共用），css按布局命名：layout.css（全部的整体框架布局），index.css（针对某个目录页面布局）。
5. 通用元素css命名，如.btn,.tb,.frm,.nav,.list,.item,.tag,.pic,.info,.tpl, 连字符命名。
6. 变量命名：驼峰式命名，如 addSite，变量集中声明，避免全局变量，变量名仅能包含字母、数字、下划线和美元符号，变量名不能以数字开头，避免使用保留字或语言构造命名。
7. 静态变量名需要下划线加大写 ex: NHU_JJH。
8. 函数命名：小驼峰式命名法。如getValue() isEmpty()。
9. 命名语义化， 简洁，表意清楚。避免使用中文拼音, 尽量使用简易的单词组合。
10. vue 组件文件夹和文件名都以标签名同名（连字符命名法）。

### 编码规范：

#### 1、通用规范
全部使用单引号 可以参照[standardjs](https://standardjs.com/readme-zhcn.html)

```js
var str = 'abc'
var record = {
  id: 123,
  name: 'test'
}

.nav {
  width: 100px
  height: 100px
}

```

所有字符串、运算符遵循前后空格的规范，json或者类json格式key值只需保留‘：’后空格

```js
var str = 'abc',
    str2 = 'ddd'
var record = {
    'id': 123,
    'name-d': 'test'
    store,
    fun () {
      // TODO
    }
}
fun1 = (d) => {
  this === window // true
}
if (str === 'abc') {
    // TODO
} else if {
    // TODO
} else {
    // TODO
}

```

推荐优先使用模板字符串 ex： `${name} hellow`

#### 2、HTML

每个 HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的表现

```js
<!DOCTYPE html>
<html>
    <head>
    </head>
</html>
```

页面统一用utf-8编码

```js
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv='Content-Type' content='text/html charset=UTF-8' />
  </head>
</html>
```

Meta标签的使用（根据需要选择）：

```js
<meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>
<meta http-equiv='Cache-Control' content='max-age=7200' />
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
```

不建议使用表格(table)标签布局（邮件模板除外）
代码书写严格参照xhtml规范，标签必须全是小写，所有标签都要关闭，即有开始和结束标签，单个标签使用“/”自关闭
一个标记必须占用一行，不得出现两个标记在同一行的情况,block块级元素一定要换行

```js
<div>
  <div>
    <span>demo</span>
  </div>
</div>
```

语义化html，如标题根据重要性用h*(同一页面只能有一个h1)，段落标记用p，无序列表用ul，有序列表使用ol，内联元素中不可嵌套块级元素
使用data-xxx形式自定义属性，且一定要小写，且属性值必须添加双引号，避免使用其它命名方式

```html
<input data-id='1' data-name='zhangsan' />
```

1. 能以背景形式呈现的图片, 尽量写入css样式中，小图片采用css sprite或data url，当然如果图片需要添加特殊的alt标识或者需要打印等，则用img标签
2. html中尽量避免使用style='xxx:xxx'的内嵌样式表。
3. 段落分隔符要使用实际对应的\<p>元素，而不是用多个\<br>标签，更不要用\&nbsp控制间距。
4. 特殊符号需要做转义，参考HTML [符号实体](http://www.w3school.com.cn/html/html_entities.asp)。
5. HTML属性顺序（建议），保证易读性。

```
id、class、name、data-*、src/for/type/href、title/alt
eg: <div id='myId' class='my' title='hello world'></div>
```

引入JS库文件，文件名须包含库名称及版本号及是否为压缩版，比如xxx-1.0.0.min.js引入插件，文件名格式为库名称+插件名称，比如xxx.xxx.js
减少标签数量，避免多余的父节点。

```js
<!-- Not so great -->
<span class='avatar'>
  <img src='...'>
</span>

<!-- Better -->
<img class='avatar' src='...'>
```

在 js 文件中生成标签让内容变得更难查找，更难编辑，性能更差，尽量避免这种情况的出现
书写链接地址时，避免重定向，例如：href='http://www.hirede.com/aboutus/'，必须在URL地址后面加上'/'

#### 3、CSS/SCSS

1. 尽可能的通过继承和层叠重用已有样式，尽量避免太多重复跟业务相关的class。
2. 背景图片请尽可能使用sprite技术（不过，图片大小最好不超过60KB，否则还是用独立下载）。
3. 同一个页面css尽量都写到同一个css文件中（oop组件化最终也会打包压缩到同一文件中）。
4. 避免使用低效的选择器。

```css
body > *{…}
ul > li > a {…}
ul#top_blue_nav {…}
#searbar span.submit a { … }
```

1. 从外部文件加载CSS，尽可能减少文件数，加载标签必须放在文件的 HEAD 部分，顺序是：全站级CSS，产品级CSS，页面级(外联)CSS，页面级(内联)CSS，内联CSS
2. CSS的外部引用 LINK 标签加载，尽量避免使用@import。
3. 无特殊情况不要在CSS中使用 !important。
4. 禁止使用table布局，div也要避免多层嵌套，尽量少使用id，原则上Id用于父级别大规模单一元素，class用于重复使用的子模块中。
5. 颜色统一使用十六进制的颜色单位，使用color: #ff0000替代color: red，特殊场景需要用到rgba除外。
6. 正确使用缩写，例如navigation就可以缩写为nav，而author就不要缩写。
7. 书写格式，每个属性值独占一行（禁止写成单行），同时注意缩进规范，(如下例)。

```css
.header {
  width: 100px
  height: 100px
  border: 1px solid #9c9c9c
}
```

CSS命名用“-”代替，做到语义化

```css
.font{
    width: 100px
}

.font-item{
    height: 100px
}
```

禁止使用'*'来选择元素

```css
* {
margin: 0px
padding: 0px
}
```

为每个选择符及每个属性申明单独使用一行

```css
h1,
h2,
h3 {
    font-size: 20px
    line-height: 25px
}
```

不要为 0 指明单位，比如使用 margin: 0 而不是 margin: 0px

更多CSS语法问题，请参考[Wikipedia](http://en.wikipedia.org/wiki/Cascading_Style_Sheets#Syntax)

CSS属性声明顺序(建议)：

基本原则：
1、Positioning
2、Box model 盒模型
3、Typographic 排版
4、Visual 外观
eg：

```css
.declaration-order {
    /* Positioning */
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 100

    /* Box-model */
    display: block
    float: right
    width: 100px
    height: 100px

    /* Typography */
    font: normal 13px 'Helvetica Neue', sans-serif
    line-height: 1.5
    color: #333
    text-align: center

    /* Visual */
    background-color: #f5f5f5
    border: 1px solid #e5e5e5
    border-radius: 3px

    /* Misc */
    opacity: 1
}
```

1. Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。
2. 盒模型紧跟其后，因为他决定了一个组件的大小和位置。
3. 其他属性只在组件 内部 起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。
4. 关于完整的属性以及他们的顺序，请参考 [Recess](http://twitter.github.io/recess/)

减少选择器的长度，每个组合选择器选择器的条目应该尽量控制在 3 个以内

```css
.main .content .content-item {

}
```

#### 4、JS

1. 文件编码统一为utf-8，书写过程中，赋值或者执行代码结束必须有分号。
2. js尽量使用oop思想做到组件化，每一个组件是一个单独的文件（或文件夹）。
3. 所有的前端异常，需要做到单一性处理，不能一个try catch里面包含多个可能性
4. 类命名：首字母大写，驼峰命名，eg： TabPanel
5. 函数命名：首字母小写，驼峰命名，eg：getValue()
6. 变量命名：首字母小写，驼峰命名，带有常用名词全部大写

```js
var myHomeAddress
var phtoneID
var imageURL
```

多行注释：每个方法定义前需要注明方法作用，参数说明

```js
/**
 * 功能描述
 * @param <String> arg1 参数1
 * @param <Number> arg2 参数2，默认为0
 * @return <Boolean> 返回值类型和说明
 */
function getValue (arg1, arg2) {
  // TODO
}

// variable declaration
var name = ''
var sex = '男'

```

何时使用注释

```
1. 难于理解的代码段
2. 可能存在错误的代码段
3. 浏览器特殊的HACK代码
4. 复杂或者想吐槽的业务逻辑代码
5. 业务逻辑强相关的代码
```

对于引用值类型的，最好用字面量声明

```js
<!-- Array -->
// Bad
var colors = new Array('red', 'green', 'blue')
var numbers = new Array(1, 2, 3, 4)

// Good
var colors = [ 'red', 'green', 'blue' ]
var numbers = [ 1, 2, 3, 4 ]

<!-- Object -->
// Bad
var team = new Team()
team.title = 'AlloyTeam'
team.count = 25

// Good
var team = {
  title: 'AlloyTeam',
  count: 25
}
```

空行的使用

```js
// 单行或多行注释前添加
function fun() {
  var _self = this

}

// 逻辑块之间添加空行增加可读性
function fun() {
  var _self = this

  for (var i = 0, len = arr.length i < len i++) {

  }
}
```

如果是异步编程，回调函数遵循cb(err, data)模式，第一个参数为异常信息，第二个为正常返回值

```js
readFile('xxx', function(err, data){
  if (err) {
      //异常处理
      return
  }
  console.log(data)
})
```

for in 不要用在遍历array上，因为会遍历继承属性，最好用在object上

```js
for (var i = 0, len = arr.length i < len i ++) {

}
```

if、while、for、do语句的执行体总是用'{'和'}'括起来，即使在其结构体内只有一条语句

```js
if (true) {
  console.log(hello word!)
}
```

1. 使用字符串 'undefined' 替代 undefined 对变量进行判断
2. 条件判断请用 '===' '!==' ，尽量不要用 '=='、'!='
3. 除非特殊情况，否则不要使用eval函数


未完待续...
