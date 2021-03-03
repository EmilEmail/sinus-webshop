<template>
  <div>
    <SearchComp />
    <ProductList />

  </div>
</template>

<script>
import ProductList from '../components/ProductList'
import SearchComp from '../components/SearchComp.vue'
export default {
  components: {
    SearchComp,
    ProductList
    
  }
}
</script>

<style lang="scss" scoped>

</style>