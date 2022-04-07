import home from '@/components/Layout/index.vue'
import * as router from './children/*/router.js'

const children = []
Object.keys(router).forEach(ele => {
  children.push(router[ele]())
})
let prefix = ''
//  若需要
if (window.__POWERED_BY_QIANKUN__) {
  prefix = '/qk_s2'
}
export default () => ({
  path: `${prefix}/home`,
  component: home,
  redirect: `${prefix}/home/index`,
  meta: {
    title: '首页',
  },
  children,
})