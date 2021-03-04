<template>
  <div class="search-results-wrapper">
      <h2>Sökresultat</h2>
      <ul>
        <button class="previous-btn" @click="previousResultPage"></button>
          <li v-for="(product, index) in searchPagination" :key="index">
            <ProductCard v-bind:product="product" /> 
          </li>
        <button class="next-btn" @click="nextResultPage"></button>
      </ul>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  data() {
    return {
      searchPage: 1,
    }
  },
  components: {
    ProductCard
  },
  computed: {
    searchResults: function() {
      return this.$store.state.searchResults;
    },
    searchPagination: function() {
      let page = this.searchPage;

      let trimStart = (page - 1) * 4;
      let trimEnd = trimStart + 4;

      let trimmedData = this.searchResults.slice(trimStart, trimEnd);

      return trimmedData;
    },
  },
  methods: {
    previousResultPage() {
      alert('prev');
    },
    nextResultPage() {
      alert('next');
    }

  }

}
</script>

<style lang="scss" scoped>

</style>