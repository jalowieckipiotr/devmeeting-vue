<!--10- 1. There's a <template> part -->
<template>
  <div id="app">
    <h2>My awesome list</h2>
    <ul>
      <!-- 2. Then, we're using built-in v-for directive to iterate over products -->
      <li v-for="p in products" :key="p.id">{{ p.name }}<button v-on:click="removeProduct(p.id)">X</button></li>
    </ul>
    <!-- 5. v-if can be helpful with conditional statements -->
    <p v-if="!products.length">No products!</p>
    <!-- 6. v-on adds an handler and :click is the name of the event, then goes the function to invoke -->
    <input v-model="product" placeholder="add multiple lines"></textarea>
    <button v-on:click="removeLast()">Remove last item</button>
    <button v-on:click="addNew(product)">Add new item</button>
  </div>
</template>

<!--21- 2. A <script> part -->
<script>
// 4. Now App is not mounted itself, we're just creating a component (more on that later - hold your horses!)
export default {
  name: 'app',
  //11/ 5. Data can no longer be just an object to prevent accidental shared state
  data() {
    return {
      product:'',
      products: [{
        id: 0,
        name: 'Coffee'
      }, {
        id: 1,
        name: 'Pizza'
      }]
    }
  },
  methods: {
        //3/ 4. The important thing is to use function with execution-based context
        removeLast() {
          this.products.pop();
        },
        addNew(product) {

          var id=this.products.length+1;
          if (id ==0) id=1;
          this.products.push(
              {
                  id: this.products.length+1,
                  name:product
              }
              
          );
          this.product='';
          console.log(this.products)
        },
        removeProduct(index) {
            for (i = 0; i < this.products.length; i++) { 
                var id = this.products[i].id;
                if(id ==index) this.products.splice(i, 1); 
            }

        
          
        },
      }
}
</script>

<!--9- 3. And <style> part -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
