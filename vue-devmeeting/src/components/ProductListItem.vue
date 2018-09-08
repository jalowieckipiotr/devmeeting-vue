
<template>
  <div>{product.name}</div>
</template>

<script>
export default {
  name: "ProductListItem",
  // The case is, we have to define props (inputs)
  props: {
    // Here we also added some basic props validation
    product: {
      type: Object
    }
  }
};
</script>

<style scoped>
</style>
