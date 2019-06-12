const WEEK_ARR =  ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
export class DateFormat {
  date
  constructor(date = new Date()) {
    this.date = this.getDate(date)
  }

  getTimestamp(days) {
    return days * 24 * 60 * 60 * 1000
  }

  add(count, type = 'day') {
    switch (type) {
      case 'day':
        this.date = new Date(+this.date + this.getTimestamp(count))
        break
      case 'week':
        this.date = new Date(+this.date + this.getTimestamp(count * 7))
        break
      case 'month':
        const thisMonth = this.date.getMonth()
        // const year = (thisMonth + count)/12 >> 0
        // const month = (thisMonth + count) % 12
        // this.date.setYear(this.date.getFullYear()+year)
        this.date.setMonth(thisMonth + count)
        break
      default:
    }
    return this
  }

  /*
   * @date  可以是时间戳，字符串，Date对象
   */
  getDate(date) {

    if(!date) {
      return new Date()
    }

    if(date instanceof Date ) {
      return date
    }

    if(isNaN(date) && typeof date === 'string') {
      // 2017-01 || 2017/1
      if(/^\d{4}-\d{2}$/.test(date) || /^\d{4}\/\d{2}$/.test(date)) {
        date = `${date}-01`
      }
      return new Date(date.replace(/-/g, '/'))
    }

    if(typeof +date === 'number') {
      return new Date(date)
    }
  }

  isSame(time, type = 'day') {
    if(type === 'day') {
      return this.format('YYYY-MM-DD') === time.format('YYYY-MM-DD')
    }else if(type === 'month') {
      return this.format('YYYY-MM') === time.format('YYYY-MM')
    }else {
      return this.format('YYYY') === time.format('YYYY')
    }
  }

  //timestamp
  timestamp() {
    return +this.date
  }

  //本月第几天
  today() {
    return this.date.getDate()
  }

  //本周第几天
  day() {
    return this.date.getDay()
  }

  month() {
    return this.date.getMonth()
  }

  //当月有几天
  daysInMonth() {
    const date = new Date()
    const currMonth = this.date.getMonth()
    date.setMonth(currMonth + 1)
    date.setDate(0);
    return date.getDate();
  }

  getWeekString() {
    return WEEK_ARR[this.date.getDay()]
  }

  getWeekIndex() {
    return this.date.getDay()
  }

  format(format) {
    const year = this.date.getFullYear()
    const month = this.date.getMonth() + 1
    const day = this.date.getDate()
    //月历考勤
    const signMonth = this.date.getMonth()
    const fullMonth = signMonth > 9 ? signMonth : signMonth == 0  ? 12 : `0${signMonth}`
    const hour = this.date.getHours()
    const minute = this.date.getMinutes()
    const second = this.date.getSeconds()
    const monthStr = month > 9 ? month : `0${month}`
    const dayStr = day > 9 ? day : `0${day}`
    const hourStr = hour > 9 ? hour : `0${hour}`
    const minuteStr = minute > 9 ? minute : `0${minute}`
    const secondStr = second > 9 ? second : `0${second}`
    let result = ''
    switch (format) {
      case 'YYYY':
        result = year
        break
      case 'MM':
        result = monthStr
        break
      case 'M':
        result = month
        break
      case 'DD':
        result = dayStr
        break
      case 'D':
        result = day
        break
      case 'HH':
        result = hourStr
        break
      case 'H':
        result = hour
        break
      case 'mm':
        result = minuteStr
        break
      case 'm':
        result = minute
        break
      case 'ss':
        result = secondStr
        break
      case 's':
        result = second
        break
      case 'HH:mm':
        result = `${hourStr}:${minuteStr}`
        break
      case 'HH:mm:ss':
        result = `${hourStr}:${minuteStr}:${secondStr}`
        break
      //6.12月历考勤新增
      case 'YYYY-MM-R':
        result =  signMonth == 0 ?  `${year - 1}-${fullMonth}` : `${year}-${fullMonth}`
        break
      case 'YYYYMM':
        result = `${year}${monthStr}`
        break
      case 'YYYY-MM':
        result = `${year}-${monthStr}`
        break
      case 'YYYY-MM-DD':
        result = `${year}-${monthStr}-${dayStr}`
        break
      case 'YYYY/MM/DD':
        result = `${year}/${monthStr}/${dayStr}`
        break
      case 'YYYY-M-D':
        result = `${year}-${month}-${day}`
        break
      case 'YYYY-MM-DD HH:mm':
        result =  `${year}-${monthStr}-${dayStr} ${hourStr}:${minuteStr}`
        break
      case 'YYYY-MM-DD HH:mm:ss':
        result =  `${year}-${monthStr}-${dayStr} ${hourStr}:${minuteStr}:${secondStr}`
        break
      case 'YYYY-M-D H:m:s':
        result =  `${year}-${month}-${day} ${hour}:${minute}:${second}`
        break
      case 'YYYY-MM-DD 00:00:00':
        result = `${year}-${monthStr}-${dayStr} 00:00:00`
        break
      case 'MM月':
        result = `${monthStr}月`
        break
      case 'M月D日':
        result = `${month}月${day}日`
        break
      case 'M.D':
        result = `${month}.${day}`
        break
      case 'MM.DD':
        result = `${monthStr}.${dayStr}`
        break
      case 'YYYY/MM/DD':
        result = `${year}/${monthStr}/${dayStr}`
        break
      case 'YYYY/MM/DD HH:mm':
        result = `${year}/${monthStr}/${dayStr} ${hourStr}:${minuteStr}`
        break
      case 'MM/DD HH:mm':
        result = `${monthStr}/${dayStr} ${hourStr}:${minuteStr}`
        break
      case 'MM月DD日':
        result = `${month}月${day}日`
        break
      case 'YYYY年MM月DD日':
        result = `${year}年${month}月${day}日`
        break
      case 'YYYY年MM月':
        result = `${year}年${monthStr}月`
        break
      case 'MM月DD日 dddd':
        result = `${monthStr}月${dayStr}日 ${this.getWeekString()}`
        break
      case 'YYYY年MM月DD日 dddd':
        result = `${year}年${monthStr}月${dayStr}日 ${this.getWeekString()}`
        break
      case 'MM月DD日 HH:mm':
        result = `${monthStr}月${dayStr}日 ${hourStr}:${minuteStr}`
        break
      case 'YYYY年MM月DD日 HH:mm':
        result = `${year}年${monthStr}月${dayStr}日 ${hourStr}:${minuteStr}`
        break
      case 'YYYY年MM月DD日 HH:mm:ss':
        result = `${year}年${monthStr}月${dayStr}日 ${hourStr}:${minuteStr}:${secondStr}`
        break
    }

    return result
  }

}

export const dateFormat = (date) => new DateFormat(date)

export const getMonthDays = (date) => {
  let  days
  let year = date.split('-')[0]
  let month = date.split('-')[1]
  if(month === '02'){
    days = year % 4 == 0 ? 29 : 28;
  }else if(month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12') {
    days = 31
  }else {
    days = 30
  }
  return days
}
