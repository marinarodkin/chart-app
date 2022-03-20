import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './registerServiceWorker'

import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import VComp from "@vue/composition-api";

Chart.register(...registerables, zoomPlugin);
Vue.use(VComp);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueAwesomeSwiper)
