import Vue from 'vue'
import App from './App.vue'
import vOutsideEvents from 'vue-outside-events'

Vue.use(vOutsideEvents)

import './assets/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
