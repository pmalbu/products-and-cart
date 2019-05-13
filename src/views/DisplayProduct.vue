<template>
  <div class="container">
    <div class="content">
      <h1>{{ product.name }}</h1>
      <p class="description">{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
    </div>
    <img width="300" class="image" :src="product.imageUrl" />
    <button @click="$router.go(-1)">Back</button>
  </div>
</template>

<script>
export default {
  name: "DisplayProduct",
  data() {
    return {
      product: {}
    };
  },
  mounted() {
    this.product = this.$store.getters.products
      .filter(product => product.slug === this.$route.params.slug)
      .shift();
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 50% 50%;
  padding-top: 50px;
  margin: 0 auto;
  max-width: 1200px;
}

.image {
}

.content h1 {
  padding-bottom: 50px;
}

.description,
.price {
  padding-top: 20px;
}
</style>
