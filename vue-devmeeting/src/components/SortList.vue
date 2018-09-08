
<template>
  <button v-on:click="sortProducts()">Sort</button>
</template>
<script>
export default {
  name: "SortList",
  // The case is, we have to define props (inputs)
  props: {
    // Here we also added some basic props validation
    
    
  },
  methods: {
      sortProducts() {
          this.$emit('sort-list');
        }
    }
};
</script>

<style scoped>
</style>
