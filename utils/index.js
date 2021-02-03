export const CARD_DATA = 'card_data'

export const getData = () => {
  if (typeof window !== 'undefined') {
    if (
      window.localStorage.getItem(CARD_DATA) &&
      window.localStorage.getItem(CARD_DATA) !== 'undefined' &&
      typeof window.localStorage.getItem(CARD_DATA) === 'string'
    ) {
      return JSON.parse(window.localStorage.getItem(CARD_DATA))
    }
    return [
      { href: 'http://www.baidu.com/', text: '百度' },
      { href: 'http://www.lagou.com/', text: '拉勾' },
      { href: 'http://www.douban.com/', text: '豆瓣' },
      { href: 'http://www.airbnb.com/', text: 'airbnb' },
      { href: 'http://www.liepin.com/', text: '猎聘' },
    ]
  }
}

export const setData = (data) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(CARD_DATA, JSON.stringify(data))
  }
}
