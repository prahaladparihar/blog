import Vue from 'vue'
import App from './App.vue'

import Headr from './components/Headr.vue'
import Foottr from './components/Foottr.vue'

Vue.component('headr', Headr);
Vue.component('foottr', Foottr);
new Vue({
    el: '#app',
    render: h => h(App)
})