<template>
   <div class="product-list-grid-wrapper-top">

    <h2>Produkter</h2>
      <ul>
        <li 
        v-for="(product, index) in products" 
        :key="index">
          <ProductCard v-bind:product="product" /> 
        </li>
      </ul>

    <h2>Brädor</h2>
      <ul>
        <li 
          v-for="(product,index) in productBoards" 
          :key="index"
          :product='product'
          @click="openModal(product)"
        >
          <ProductCard v-bind:product="product" /> 
        </li>
      </ul>

    <h2>Kläder</h2>
      <ul>
        <li 
          v-for="(product,index) in productClothes" 
          :key="index"
          :product='product'
          @click="openModal(product)"
        >
          <ProductCard v-bind:product="product" /> 
      </li>
    </ul>

    <h2>Tillbehör</h2>
      <ul>
        <li 
          v-for="(product,index) in productWheels" 
          :key="index"
          :product='product'
          @click="openModal(product)"
        >
          <ProductCard v-bind:product="product" /> 
      </li>
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
      product: [],
      showModal: false,
      closeModal: true,
      productItem: {},

    }
  },
  components: {
    ProductCard,
    ProductModal,
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    },
    productBoards: function() {
      return this.$store.getters.products.filter(pro => pro.category == "board");
    },
    productClothes: function() {
      return this.$store.getters.products.filter(pro => pro.category == "clothes");
    },
    productWheels: function() {
      return this.$store.getters.products.filter(pro => pro.category == "wheels");
    },
  },
  methods: {
    openModal(item){
      this.showModal = true
      this.productItem = item
    },
    toCloseModal() {
      this.showModal = false
    }
  },
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;
}
</style>