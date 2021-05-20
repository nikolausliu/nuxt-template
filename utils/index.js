// 对象转成query字符串
export const obj2query = (obj) => {
  let query = ''
  if (Object.prototype.toString.call(obj) !== '[object Object]') return query
  query = Object.keys(obj)
    .map((key) => {
      return `${key}=${obj[key]}`
    })
    .join('&')
  return query ? `?${query}` : query
}
