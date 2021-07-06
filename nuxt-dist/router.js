import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2a270952 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _44c8886b = () => interopDefault(import('../pages/evenements/index.vue' /* webpackChunkName: "pages/evenements/index" */))
const _6a7ade40 = () => interopDefault(import('../pages/menu/index.vue' /* webpackChunkName: "pages/menu/index" */))
const _cbc2d404 = () => interopDefault(import('../pages/reservation.vue' /* webpackChunkName: "pages/reservation" */))
const _f9026b9c = () => interopDefault(import('../pages/menu/plats.vue' /* webpackChunkName: "pages/menu/plats" */))
const _4311e723 = () => interopDefault(import('../pages/evenements/_slug.vue' /* webpackChunkName: "pages/evenements/_slug" */))
const _5a194384 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _2a270952,
    name: "contact"
  }, {
    path: "/evenements",
    component: _44c8886b,
    name: "evenements"
  }, {
    path: "/menu",
    component: _6a7ade40,
    name: "menu"
  }, {
    path: "/reservation",
    component: _cbc2d404,
    name: "reservation"
  }, {
    path: "/menu/plats",
    component: _f9026b9c,
    name: "menu-plats"
  }, {
    path: "/evenements/:slug",
    component: _4311e723,
    name: "evenements-slug"
  }, {
    path: "/",
    component: _5a194384,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
