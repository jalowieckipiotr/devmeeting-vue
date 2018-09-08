import axios from 'axios';

// Majestic 'store' is just a variable in our case
const store = {
  //3/ It holds a state itself
  state: {
    products: [],
    search: []
  },
  //6/ And methods to update
  async fetchProducts(searchText) {
      var search = '';
    if(searchText !=null && searchText !='')
    {
        search='?by_name=' + searchText;
    }
    this.state.products = await axios.get('https://api.openbrewerydb.org/breweries' + search).then(res => res.data);
  },
  addProduct(product) {
    this.state.products.push(product);
  },
  sortMethod() {
    this.state.products.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} ); 
  }
};

export default store;
