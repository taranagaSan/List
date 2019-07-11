<template>
  <div class="container">
    <div class="row justify-content-center">
      <div id="app" class="w-100">
        <FormAddProduct/>
        <ProductsList/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from './components/ProductsList.vue';
import FormAddProduct from './components/FormAddProduct.vue';

export default {
  name: 'app',
  components: {
    ProductsList,
    FormAddProduct,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
