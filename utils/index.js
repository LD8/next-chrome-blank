export const CARD_DATA = 'card_data'

export const getData = () => {
  if (typeof window !== 'undefined') {
    if (
      typeof window.localStorage.getItem(CARD_DATA) === 'string' &&
      window.localStorage.getItem(CARD_DATA) !== 'undefined'
    ) {
      return JSON.parse(window.localStorage.getItem(CARD_DATA))
    }
    return [
      // { href: 'https://www.baidu.com/', text: '百度' },
      // { href: 'https://www.lagou.com/', text: '拉勾' },
      // { href: 'https://www.douban.com/', text: '豆瓣' },
    ]
  }
}

export const setData = (data) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(CARD_DATA, JSON.stringify(data))
  }
}
