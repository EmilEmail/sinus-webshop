<template>
  <div>
    <SearchComp @searchClicked="searchClicked" />
    <ProductListV2 :showOnlySearchResults="showOnlySearchResults" />
  </div>
</template>

<script>
import ProductListV2 from '../components/ProductList.vue'
import SearchComp from '../components/SearchComp.vue'
export default {
  data() {
    return {
      showOnlySearchResults: false
    }
  },
  components: {
    SearchComp,
    ProductListV2
  },
  methods: {
    searchClicked() {
      this.showOnlySearchResults = true;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>