import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/global.css'
import '../src/style/__login.css'

import DefaultLayout from './layouts/Default.vue'
import BlankLayout from './layouts/Blank.vue'
// import setAuthHeader from './utilty/setAuthHeader'

// if(localStorage.jwt){
//     setAuthHeader(localStorage.jwt);
// }else{
//     setAuthHeader(false)
// }


//SweetAlarm
import 'sweetalert2/src/sweetalert2.scss'
//icon
/* import the fontawesome core */
import '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import  '@fortawesome/vue-fontawesome'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './plugins/vuetify'

const vuetify = createVuetify({
  components,
  directives,
})



import axios from 'axios'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

createApp(App).use(bootstrap).use(vuetify).use(store).use(router).mount('#app')
Vue.component('default-layout',DefaultLayout)
Vue.component('blank-layout',BlankLayout)
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
});