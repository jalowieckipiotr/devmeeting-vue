<template>
  <div id="app">
    <h2>Browarnie</h2>
    <!-- 3. Then we can use component by kebab-cased name and providing :input -->
    <product-list :products="sharedState.products"></product-list>
    <add-product @add-product="onAddProduct"></add-product>
    <SortList @sort-list="sortMethod"></SortList>
    <input v-model="search"/>
    <button v-on:click="searchFunction(search)">Search</button>
   
  </div>
</template>

<script>

// 1. To use our new, shiny component we need to import it first
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct';
import SortList from './components/SortList';
import store from '../store';
export default {
  name: 'app',
  //3/ 2. And add it to as a key called 'components'
  components: {
    ProductList,
    AddProduct,
    SortList
  },
  created() {
    store.fetchProducts();
  },
   data() {
    //3/ 3. Instead of just products we have to add reference to whole state
    return {
      sharedState: store.state,
      search:''
    }
  },
   methods: {
    //3/ All we have to do in a method is to add product to the list
    onAddProduct(product) {
      store.addProduct(product);
    },
    sortMethod() {
      store.sortMethod();
    },
    searchFunction(search) {
      store.fetchProducts(search);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
