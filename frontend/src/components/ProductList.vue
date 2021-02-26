<template>
  <div class="product-list-grid-wrapper-top">
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <ProductCard v-bind:product="product" /> 
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  data() {
    return{
      product: []
    }
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  },
  components: {
    ProductCard
  },

  
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;
}
</style>