const routers = [
    {
        path: '/home',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/home.vue'], resolve)
    },
    {
        path: '/phone',
        meta: {
            title: '商品列表'
        },
        component: (resolve) => require(['./views/phone.vue'], resolve)
    },
    {
        path: '/cart',
        meta: {
            title: '购物车'
        },
        component: (resolve) => require(['./views/cart.vue'], resolve)
    },
    {
        path:'/detil/:id',
        meta:{
            title:'手机详情'
        },
        component: (resolve) => require(['./views/detil.vue'],resolve)
    },
    {
        path: '*',
        redirect: '/home'
    }
];
export default routers;