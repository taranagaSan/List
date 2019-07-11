<template>
  <div>
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Название</th>
        <th scope="col">Описание</th>
        <th scope="col">Цена</th>
        <th scope="col">Дата покупки</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, index) in productsList" :key="index">
        <th scope="row">{{index + 1}}</th>
        <td>
          <input type="text"
                 required
                 class="form-control table-input"
                 v-model="product.productName"
                 @change="updateField"
          >
        </td>
        <td>
          <input type="text"
                 required
                 class="form-control table-input"
                 v-model="product.productDescription"
                 @change="updateField"
          >
        </td>
        <td>
          <input type="number"
                 required
                 class="form-control table-input"
                 v-model="product.productPrice"
                 @change="updateField"
          >
        </td>
        <td>{{product.productDate}}</td>
        <td id="deleteProduct"
            @click="deleteProduct(index)">
          <img src="../assets/minus-solid.svg" alt="">
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';


export default {
  name: 'ProductsList',
  data() {
    return {
    };
  },
  computed: {
    productsList() {
      return this.products.map(object => ({ ...object }));
    },
    ...mapState([
      'products',
    ]),
  },
  methods: {
    ...mapMutations([
      'deleteProduct',
      'setProductsFromStorage',
      'saveProductsToStorage',
    ]),
    updateField() {
      this.setProductsFromStorage(this.productsList);
      this.saveProductsToStorage();
    },
  },
};
</script>

<style scoped>
img {
  width: 8px;
}
</style>
