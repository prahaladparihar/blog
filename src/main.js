import Vue from 'vue'
import App from './App.vue'

import Headr from './components/Headr.vue'

Vue.component('headr', Headr);
new Vue({
    el: '#app',
    render: h => h(App)
})