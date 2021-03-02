<template>
   <div class="product-list-grid-wrapper-top">
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
      </ul>

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
    </ul>

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