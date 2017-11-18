import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'

Vue.use(VueMaterial)
Vue.config.productionTip = false

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'black',
  warn: 'red',
  background: 'white'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
