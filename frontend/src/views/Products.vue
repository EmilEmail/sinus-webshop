<template>
  <div>
<<<<<<< Updated upstream
    <SearchComp />
    <ProductList />
=======
    <SearchComp @searchClicked="searchClicked" />
    <ProductListV2 :showOnlySearchResults="showOnlySearchResults" />
>>>>>>> Stashed changes
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'
import SearchComp from '../components/SearchComp.vue'
export default {
  data() {
    return {
      showOnlySearchResults: false
    }
  },
  components: {
    SearchComp,
<<<<<<< Updated upstream
    ProductList
=======
    ProductListV2
  },
  methods: {
    searchClicked() {
      this.showOnlySearchResults = true;
    }
>>>>>>> Stashed changes
  }
}
</script>

<style lang="scss" scoped>

</style>