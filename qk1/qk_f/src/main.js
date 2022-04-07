import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false
import { registerMicroApps, start } from "qiankun"
let msg = {
   // 传入子应用的内容
};
// 注册子应用
registerMicroApps(
  [
    {
      name: "qk_s2",
      entry: "//localhost:8092",
      //  指定子应用的挂载容器
      container: '#subApp',
      activeRule: "#/qk_s2",
      props: msg
    },
    {
      name: "qk_s1",
      entry: "//localhost:8091",
      //  指定子应用的挂载容器
      container: '#subApp',
       activeRule: "#/qk_s1",
      props: msg
    },
      
  ],

);

// const request = url => { return fetch(url, { referrerPolicy: 'origin-when-cross-origin' }) };
// start({ prefetch: true, sandbox: { experimentalStyleIsolation: true }, fetch: request });
start({ prefetch: true, sandbox: { experimentalStyleIsolation: true } });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
