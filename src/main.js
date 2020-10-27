import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'

// Import Axios
import api from './utils/api.js'

// Import ElementUI
import './plugins/element.js'
import './theme/index.css'

//Import Store
import store from './store/index.js'

Vue.prototype.$axios = api;

Vue.config.productionTip = false;

router.beforeEach((to,from,next) => {
    // let isLogin = sessionStorage.getItem('isLogin')

    if (to.path == '/logout'){
        sessionStorage.clear();
        next('/login');
    }else if (to.path == '/login'){
        // if(isLogin != null){
        //     next('/main');
        // }
        window.location.href = 'http://localhost:8888';
        next(false);
    }
})

new Vue({
    store,
    render: h => h(App),
    router
}).$mount('#app')
