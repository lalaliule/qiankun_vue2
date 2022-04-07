import index from './index.vue'
let prefix = ''
//  若需要
if (window.__POWERED_BY_QIANKUN__) {
  prefix = '/qk_s2'
}
export default () => (
  {
    path: `${prefix}/home/index`,
    name: 'index',
    component: index,
    meta: {
      title: '首页',
    },
  }
)