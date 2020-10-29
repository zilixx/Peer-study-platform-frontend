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
    let cookies = document.cookie.split(' ');

    if (cookies.length > 1) {
        for (var i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].split('=')
            let key = cookie[0];
            let value = cookie[1].slice();
            sessionStorage.setItem(key, value);
        }
    }
    let isLogin = sessionStorage.getItem("isLogin");

    if (to.path == '/logout'){
        deleteAllCookies();
        sessionStorage.clear();
        isLogin = null;
        next('/login');
    }
    else if (to.path == '/login'){
        if(isLogin != null){
            next('/');
        }else{
            window.location.href = 'http://localhost:8888';
            next(false);
        }
    }
    else{
        if (isLogin != null) {
            next();
        }else {
            window.location.href = 'http://localhost:8888';
            next(false);
        }
    }
})

function deleteAllCookies() {
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

new Vue({
    store,
    render: h => h(App),
    router
}).$mount('#app')
