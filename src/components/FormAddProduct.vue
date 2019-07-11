<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 mb-4">
      <form action="" id="form-add-product" @submit.prevent="addProduct">
        <h4>Форма добавления покупок</h4>
        <div class="form-row">
          <div class="col-md-8">
            <label for="product-name">Название</label>
            <input type="text"
                   id="product-name"
                   class="form-control"
                   name="product-name"
                   v-model.trim="productName"
                   required>
          </div>
          <div class="col-md-4">
            <label for="product-name">Цена</label>
            <input type="number"
                   id="product-price"
                   class="form-control"
                   name="product-price"
                   v-model.trim="productPrice"
                   required>
          </div>
          <div class="col-md-12">
            <label for="product-name">Описание</label>
            <textarea id="product-description"
                      class="form-control"
                      name="product-description"
                      v-model.trim="productDescription"
                      required>
            </textarea>
            <button type="submit"
                    class="btn mt-4 form-submit">Добавить</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import dateformat from 'dateformat';

export default {
  name: 'FormAddProduct',
  data() {
    return {
      productName: '',
      productPrice: null,
      productDescription: '',
    };
  },
  methods: {
    clearData() {
      this.productName = '';
      this.productPrice = null;
      this.productDescription = '';
    },
    addProduct() {
      const date = new Date();
      const localDateAndTime = dateformat(date, 'd/m/yy, h:MM TT');
      const product = {
        productName: this.productName,
        productPrice: this.productPrice,
        productDescription: this.productDescription,
        productDate: localDateAndTime,
      };
      const form = document.getElementById('form-add-product');
      if (form.checkValidity()) {
        this.$store.commit('setProducts', product);
        this.clearData();
      }
    },
  },
};
</script>
