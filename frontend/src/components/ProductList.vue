<template>
   <div class="product-list-grid-wrapper-top">
    <div>
      <h2>Brädor</h2>
        <ul>
          <li 
            v-for="(product,index) in product.boards" 
            :key="index"
            :product='product'
            @click="openModal(product)"
          >
            <ProductCard v-bind:product="product" /> 
          </li>
          <button :disabled="pageNumber === 1" @click="prevPage" >
            Previous
          </button>
          <button :disabled="pageNumber < pages.length" @click="nextPage">
            Next
          </button>
        </ul>
      </div>

      <div>
        <h2>Kläder</h2>
          <ul>
            <li 
              v-for="(product,index) in product.clothes" 
              :key="index"
              :product='product'
              @click="openModal(product)"
            >
              <ProductCard v-bind:product="product" /> 
            </li>
            <button :disabled="pageNumber === 1" @click="prevPage" >
              Previous
            </button>
            <button :disabled="pageNumber < pages.length" @click="nextPage">
              Next
            </button>
          </ul>
        </div>

    
        <h2>Tillbehör</h2>
          <ul>
            <li 
              v-for="(product,index) in product.wheels" 
              :key="index"
              :product='product'
              @click="openModal(product)"
            >
              <ProductCard v-bind:product="product" /> 
            </li>
            <button :disabled="pageNumber === 1" @click="prevPage" >
              Previous
            </button>
            <button :disabled="pageNumber < pages.length" @click="nextPage">
              Next
            </button>
          </ul>

    <ProductModal 
      v-if="showModal" 
      :product='productItem'
      v-on:closeModal="toCloseModal()"
    />
  </div>
</template>


<script>
import ProductCard from './ProductCard.vue'
import ProductModal from './ProductModal.vue';
export default {
  data() {
    return{
      product: {},
      showModal: false,
      closeModal: true,
      productItem: {},
      
      pageNumber: 1,//k
			perPage: 1,//k
			pages: [],//k
    }
  },
  components: {
    ProductCard,
    ProductModal,
  },
  created() {
    this.product.boards = this.$store.getters.products.filter(pro => pro.category == "board");
    this.product.clothes = this.$store.getters.products.filter(pro => pro.category == "clothes");
    this.product.wheels = this.$store.getters.products.filter(pro => pro.category == "wheels");
  },
  computed: {
    // productBoards: function() {
    //   return this.$store.getters.products.filter(pro => pro.category == "board");
    // },
    // productClothes: function() {
    //   return this.$store.getters.products.filter(pro => pro.category == "clothes");
    // },
    // productWheels: function() {
    //   return this.$store.getters.products.filter(pro => pro.category == "wheels");
    // },
  },
  methods: {
    openModal(item){
      this.showModal = true
      this.productItem = item
    },
    toCloseModal() {
      this.showModal = false
    },
    paginate (products) {     //k
			let pageNumber = this.pageNumber;
			let perPage = this.perPage;
			let start = (pageNumber * perPage) - perPage;
			let end = (pageNumber * perPage);
			return  products.slice(start, end);
		},
    nextPage(){ //k
     this.pageNumber++;
    },
    prevPage(){   //k
      this.pageNumber--;
    },
    pageCount(){    //k
      let l = this.products.length,
          s = this.perPage;
      return Math.ceil(l/s);
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;
}
</style>