import Vue from 'vue'
import App from './App.vue'
import "@/assets/styles/main.css";

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
