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
  computed: {
    // showOnlySearchResults: function() {
    //   return this.$store.state.showOnlySearchResults;
    // }
  },
  components: {
    SearchComp,
    ProductListV2
  },
  methods: {
    // searchClicked() {
    //   console.log(this.$store.state.showOnlySearchResults);
    //   this.$store.state.showOnlySearchResults = true;
    //   console.log(this.$store.state.showOnlySearchResults);
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>