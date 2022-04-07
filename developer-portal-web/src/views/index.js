/* eslint-disable indent */
import * as modules from './*/index.js'
let prefix = ''
    //  若需要
    if (window.__POWERED_BY_QIANKUN__) {
        prefix = '/qk_s2'
    }
export default (Vue, router, store) => {
    Object.keys(modules).forEach(key => {
        Vue.use(modules[key], store, router)
    })
    router.addRoutes(
        [{
                path: `${prefix}/`,
                name: 'root',
                redirect: `${prefix}/home`,
            },
            {
                path: `${prefix}/login`,
                name: 'login',
                component: () =>
                    import('./login/index.vue'),
            },
            {
                path: `${prefix}/404`, // 此处需特别注意至于最底部
                component: () =>
                    import('../components/NotFound'),
            },
            {
                path: `${prefix}*`,
                redirect: '/404',
            },
        ])
    console.log(router.getRoutes(), 'router')
}