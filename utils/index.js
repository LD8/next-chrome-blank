export const CARD_DATA = 'card_data'

export const getData = () => {
  return (
    window.localStorage.getItem(CARD_DATA) || [
      { href: 'https://www.baidu.com/', text: '百度' },
      { href: 'https://www.lagou.com/', text: '拉勾' },
      { href: 'https://www.douban.com/', text: '豆瓣' },
    ]
  )
}

export const setData = (data) => {
  window.localStorage.setItem(CARD_DATA, JSON.stringify(data))
}
