<template>
  <table v-if="$store.getters.cart.length > 0">
    <tr>
      <td colspan="3"><h2>Cart</h2></td>
    </tr>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Total Price</th>
    </tr>
    <tr v-for="(item, index) in $store.getters.cart" :key="index">
      <td>{{ item.product.name }}</td>
      <td>{{ item.quantity }}</td>
      <td>{{ (item.quantity * item.product.price) | currency }}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td></td>
      <td>{{ cartTotal | currency }}</td>
    </tr>
  </table>
</template>

<script>
import Vue from "vue";
import Vue2Filters from "vue2-filters";

Vue.use(Vue2Filters);

export default {
  name: "ShoppingCart",
  computed: {
    cartTotal() {
      let total = 0;
      this.$store.getters.cart.forEach(
        item => (total += item.quantity * item.product.price)
      );
      return total;
    }
  }
};
</script>

<style scoped>
tr,
th,
td {
  border: 1px solid #333;
  padding: 10px;
}
table {
  margin: 0 auto;
}

button {
  padding: 10px 40px;
  background-color: lightgreen;
  border-color: gray;
}
</style>
