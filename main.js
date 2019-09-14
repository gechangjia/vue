import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import App from './app.vue';
import './style.css';
import phone_data from './phone.js';
Vue.use(VueRouter);
Vue.use(Vuex);

// 路由配置
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

// 数组排重
function getFilterArray (array) {
    const res = [];
    const json = {};
    for (let i = 0; i < array.length; i++){
        const _self = array[i];
        if(!json[_self]){
            res.push(_self);
            json[_self] = 1;
        }
    }
    return res;
};

const store = new Vuex.Store({
    state:{
        phoneList:[],
        cartList:[]
    },
    mutations:{
        setPhoneList(state,data){
            state.phoneList=data;
        },
        addCart(state,id){
            let addIs=state.cartList.find(item => item.id === id);
            if(addIs){
                addIs.count++;
            }else{
                state.cartList.push({
                    id:id,
                    count:1
                })
            }
        },
        delCart(state,id){
            const index= state.cartList.findIndex(item => item.id === id);
            state.cartList.splice(index,1);
        },
        changeCount(state,data_){
            const phone = state.cartList.find(item => item.id === data_.id);
            phone.count+=data_.count;
        }
    },
    getters:{
        names: state => {
            const names = state.phoneList.map(item => item.name);
            return getFilterArray(names);
        }
    },
    actions:{
        getPhoneList(context){
            setTimeout(function(){
                context.commit('setPhoneList',phone_data);
            },100)
        }
    }
});

new Vue({
    el: '#app',
    router: router,
    store:store,
    render: h => {
        return h(App)
    }
});