import Vue from 'vue';
import App from './App.vue';
import store from './store';
import 'dateformat';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

Vue.config.productionTip = false;

new Vue({
  store,
  created() {
    const initProducts = JSON.parse(localStorage.getItem('Sasha'));
    if (initProducts) {
      this.$store.commit('setProductsFromStorage', initProducts);
    } else {
      return false;
    }
  },
  render: h => h(App),
}).$mount('#app');
