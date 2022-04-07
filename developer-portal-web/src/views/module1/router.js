// import module1 from './index.vue'
import layout from '@/components/Layout/index.vue'
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
  path: `${prefix}/module1`,
  component: layout,
  redirect: `${prefix}/module1/menu1`,
  meta: {
    title: '菜单一',
  },
  children,
})