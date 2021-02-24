<template>
  <div>
    Products
    <ProductList />
    <ProductModal />
    <SearchComp />
  </div>
</template>

<script>
import ProductList from '../components/ProductList'
import ProductModal from '../components/ProductModal.vue'
import SearchComp from '../components/SearchComp.vue'
export default {
  components: {
    ProductList,
    ProductModal,
    SearchComp
  }
}
</script>

<style lang="scss" scoped>

</style>