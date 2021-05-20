export default function ({ app, redirect }) {
  app.router.beforeEach((to, from, next) => {
    console.log('路由全局before守卫', to.name, from.name)
    // next(true) next(false) √
    // next('login') ×
    // 如果要重定向,不能用next('/login'),而应该用redirect('/login')
    next()
  })
}
