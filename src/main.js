import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


Vue.prototype.axios = axios;

import Headr from './components/Headr.vue'
import Boody from './components/Boody.vue'
import ShowBlog from './components/ShowBlog.vue'
import Foottr from './components/Foottr.vue'


Vue.component('headr', Headr);
Vue.component('boody', Boody);
Vue.component('showblog', ShowBlog);
Vue.component('foottr', Foottr);
new Vue({
    el: '#app',
    render: h => h(App)
})