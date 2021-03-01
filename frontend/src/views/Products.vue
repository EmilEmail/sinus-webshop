<template>
  <div>
    Products
    <ProductList />
    <SearchComp />
  </div>
</template>

<script>
import ProductList from '../components/ProductList'
import SearchComp from '../components/SearchComp.vue'
export default {
  components: {
    ProductList,
    SearchComp
  }
}
</script>

<style lang="scss" scoped>

</style>