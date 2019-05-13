<template>
  <div class="products-list">
    <div
      v-for="(product, index) in $store.getters.products"
      :key="index"
      @click="$router.push('/products/' + product.slug)"
    >
      <img width="200" :src="product.imageUrl" alt="Image Url" />
      <h2>{{ product.name }}</h2>
      <p class="description">{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
      <button style="color:red" @click.stop="deleteProduct(index)">ⓧ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  methods: {
    deleteProduct(index) {
      this.$store.commit("deleteProduct", index);
    }
  }
};
</script>

<style scoped>
.products-list {
  display: flex;
  padding-top: 30px;
}
.products-list div {
  width: 33%;

  box-sizing: border-box;
  padding: 30px;
  background-color: lightsalmon;
}

button {
  padding: 5px;
  font-size: 2rem;
}

.description,
.price {
  padding-top: 20px;
}
</style>
