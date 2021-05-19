import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.min";
import "@fortawesome/vue-fontawesome/src/components/FontAwesomeIcon";
import "@fortawesome/vue-fontawesome/src/components/FontAwesomeLayers";
import "@fortawesome/vue-fontawesome/src/components/FontAwesomeLayersText";

new Vue({
  render: h => h(App),
}).$mount('#app')
