import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export default new Store({
  state: {
    name: 'Sasha',
    products: [],
  },
  mutations: {
    setProducts(state, product) {
      state.products.push(product);
      try {
        localStorage.clear();
        const storageData = JSON.stringify(state.products);
        localStorage.setItem(state.name, storageData);
      } catch (e) {
        console.log(e);
      }
    },
    deleteProduct(state, index) {
      state.products.splice(index, 1);
      try {
        localStorage.clear();
        const storageData = JSON.stringify(state.products);
        localStorage.setItem(state.name, storageData);
      } catch (e) {
        console.log(e);
      }
    },
    setProductsFromStorage(state, products) {
      state.products = products;
    },
    saveProductsToStorage(state) {
      try {
        const storageData = JSON.stringify(state.products);
        localStorage.setItem(state.name, storageData);
      } catch (e) {
        console.log(e);
      }
    },
  },
  strict: process.env.NODE_ENV !== 'production',
});
