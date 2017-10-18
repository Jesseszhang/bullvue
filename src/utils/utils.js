/**
 * 解析url参数
 * @param {*} urlSearch
 */
const search = (urlSearch) => {
  if (!urlSearch) {
    return false
  }

  if (urlSearch.indexOf('?') > -1) {
    urlSearch = urlSearch.slice(1)
  }

  const searchObj = {}

  let urlSearchArr = urlSearch.split('&')

  urlSearchArr.forEach((item) => {
    let searchItem = item.split('=')

    Object.assign(searchObj, {
      [searchItem[0]]: searchItem[1]
    })
  })

  return searchObj
}

/**
 * 删除左右两端的Enter
 * @param {String}
 * @return {String}
 *
 */
const trimEnter = (str) => {
  return str.replace(/(^\n*)|(\n*$)/g, '')
}
/**
 * or
 * @param {*} string
 */
const trim = (string) => {
  const reg = new RegExp('(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)', 'g')
  return string.replace(reg, '')
}

/**
 * @param {String} - 需要转换的值
 * @param {String} - 需要格式化的值
 */
const time = (value, format) => {
  if (!value) {
    return '--'
  }
  let time = new Date(value)
  let str = format || 'yyyy-MM-dd'
  let Week = ['日', '一', '二', '三', '四', '五', '六']

  str = str.replace(/yyyy|YYYY/, time.getFullYear())
  str = str.replace(/yy|YY/, (time.getYear() % 100) > 9 ? time.getYear() % 100 : '0' + (time.getYear() % 100))

  str = str.replace(/MM/, time.getMonth() + 1 > 9 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1))
  str = str.replace(/M/g, time.getMonth() + 1)

  str = str.replace(/w|W/g, Week[time.getDay()])

  str = str.replace(/dd|DD/, time.getDate() > 9 ? time.getDate() : '0' + time.getDate())
  str = str.replace(/d|D/g, time.getDate())

  str = str.replace(/hh|HH/, time.getHours() > 9 ? time.getHours() : '0' + time.getHours())
  str = str.replace(/h|H/g, time.getHours())
  str = str.replace(/mm/, time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes())
  str = str.replace(/m/g, time.getMinutes())

  str = str.replace(/ss|SS/, time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds())
  str = str.replace(/s|S/g, time.getSeconds())

  return str
}
/**
 * min 到 max 随机数
 * @param {min value} min
 * @param {max value} max
 */
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
/**
 * 获取未来或之前n天的日期
 * @param {增加的天数} add
 */
const getFutureDate = (add) => {
  let curData = new Date()
  curData.setDate(curData.getDate() + add)
  let year = curData.getFullYear()
  let month = (curData.getMonth() + 1) < 10 ? '0' + (curData.getMonth() + 1) : (curData.getMonth() + 1)
  let day = curData.getDate() < 10 ? '0' + curData.getDate() : curData.getDate()
  return year + '-' + month + '-' + day + ' ' + '24:00'
}

export {
  search,
  trimEnter,
  trim,
  time,
  randomNum,
  getFutureDate
}
