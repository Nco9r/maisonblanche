import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7589044e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _674b28ef = () => interopDefault(import('../pages/evenements/index.vue' /* webpackChunkName: "pages/evenements/index" */))
const _29d8e464 = () => interopDefault(import('../pages/menu/index.vue' /* webpackChunkName: "pages/menu/index" */))
const _1dd2b2fa = () => interopDefault(import('../pages/reservation.vue' /* webpackChunkName: "pages/reservation" */))
const _68658636 = () => interopDefault(import('../pages/menu/boissons.vue' /* webpackChunkName: "pages/menu/boissons" */))
const _2c5791eb = () => interopDefault(import('../pages/menu/desserts.vue' /* webpackChunkName: "pages/menu/desserts" */))
const _3ad5c494 = () => interopDefault(import('../pages/menu/plats.vue' /* webpackChunkName: "pages/menu/plats" */))
const _4e62d9ac = () => interopDefault(import('../pages/menu/rhum.vue' /* webpackChunkName: "pages/menu/rhum" */))
const _93e95db2 = () => interopDefault(import('../pages/menu/tapas.vue' /* webpackChunkName: "pages/menu/tapas" */))
const _17306916 = () => interopDefault(import('../pages/menu/vins.vue' /* webpackChunkName: "pages/menu/vins" */))
const _659487a7 = () => interopDefault(import('../pages/evenements/_slug.vue' /* webpackChunkName: "pages/evenements/_slug" */))
const _4a75cd80 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7589044e,
    name: "contact"
  }, {
    path: "/evenements",
    component: _674b28ef,
    name: "evenements"
  }, {
    path: "/menu",
    component: _29d8e464,
    name: "menu"
  }, {
    path: "/reservation",
    component: _1dd2b2fa,
    name: "reservation"
  }, {
    path: "/menu/boissons",
    component: _68658636,
    name: "menu-boissons"
  }, {
    path: "/menu/desserts",
    component: _2c5791eb,
    name: "menu-desserts"
  }, {
    path: "/menu/plats",
    component: _3ad5c494,
    name: "menu-plats"
  }, {
    path: "/menu/rhum",
    component: _4e62d9ac,
    name: "menu-rhum"
  }, {
    path: "/menu/tapas",
    component: _93e95db2,
    name: "menu-tapas"
  }, {
    path: "/menu/vins",
    component: _17306916,
    name: "menu-vins"
  }, {
    path: "/evenements/:slug",
    component: _659487a7,
    name: "evenements-slug"
  }, {
    path: "/",
    component: _4a75cd80,
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
