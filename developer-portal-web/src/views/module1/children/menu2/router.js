
let prefix = ''
//  若需要
if (window.__POWERED_BY_QIANKUN__) {
  prefix = '/qk_s2'
}
export default () => ({
  path: `${prefix}/module1/menu2`,
  component: () => import('./views/index.vue'),
  meta: {
    title: '实有房屋',
  },
})