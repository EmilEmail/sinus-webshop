<template>
  <div>
    <SearchComp />
    <ProductListV2 />
  </div>
</template>

<script>
import ProductListV2 from '../components/ProductListV2.vue'
import SearchComp from '../components/SearchComp.vue'
export default {
  components: {
    SearchComp,
    ProductListV2
  }
}
</script>

<style lang="scss" scoped>

</style>