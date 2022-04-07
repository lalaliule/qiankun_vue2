// import app from './app.js'
// app.$mount('#app')
import './public-path'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/init.css' //默认css
import '@/assets/css/scroll.scss' //默认css
import '@/lib/http/axios' //axios
import { http } from '@/lib/http/index' //封装后的axios
import echarts from 'echarts'
//ui框架
import Vue from 'vue'
// 设置cookie
import VueCookies from 'vue-cookies'
import Fragment from 'vue-fragment'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import components from './components/index'
import directives from './directives/index'
// import './permission'
import router from './router'
import store from './store'
import utils from './utils/index'
import views from './views/index'

Vue.use(ElementUI)
Vue.use(VueCookies)

Vue.use(components) //全局组件
Vue.use(directives) //全局指令
Vue.use(utils) //全局工具函数
sync(store, router) //route和store结合

Vue.use(Fragment.Plugin) //跟元素

Vue.prototype.http = http
Vue.prototype.echarts = echarts
Vue.use(views, router, store)

Vue.config.productionTip = false

let instance = null
function render(props = {}) {
  const { container } = props
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#qk_s2') : '#qk_s2')
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
  console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
