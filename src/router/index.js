import Vue from 'vue'
import Router from 'vue-router'
import routePath from './route.json'

Vue.use(Router)

const getRoute = (path) => {
  let route = []
  path.map(item =>
    item.list.map(page => {
      route.push({
        name: page.name,
        path: page.path,
        component: require(`../components${page.path}${page.path}`).default,
        meta: {
          title: page.title,
          description: page.description
        }
      })
    })
  )
  return { route }
}

const routes = getRoute(routePath)

routes.route.push({
  path: '/',
  component: require('../example/home/home').default,
  title: 'home'
})

const router = new Router({
  routes: routes.route
})

let scrollTop = 0
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    scrollTop = document.body.scrollTop
  }
  document.title = route.meta.title || document.title
  next()
})

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = scrollTop
    })
  }
})

export default router
