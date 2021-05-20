export default function ({ $axios }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onResponse((response) => {
    return response
  })

  $axios.onError((error) => {
    if (process.client) {
      // 处理客户端请求错误
      if (error.response) {
        // window.$nuxt.$root.$message.error(
        //   error.response.data?.error_msg || error.response.statusText
        // )
      }
    }
  })
}
