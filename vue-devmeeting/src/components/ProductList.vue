
<template>
  <div>
    <ul>
      <li v-for="p in products" :key="p.id">
          <product-list-item :product="p"></product-list-item>
      </li>
    </ul>
    <p v-if="!products.length">No products!</p>
  </div>
</template>

<script>
import ProductListItem from './ProductListItem';

export default {
  name: "ProductList",
  components:{
    ProductListItem
  },
  // The case is, we have to define props (inputs)
  props: {
    // Here we also added some basic props validation
    products: {
      type: Array
    }
  }
};
</script>

<style scoped>
</style>
