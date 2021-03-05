<template>
  <div class="search-results-wrapper">
      <h2>Sökresultat</h2>
      <ul>
          <button v-if="showPreviousSearch()" class="previous-btn" @click="previousResultPage"></button>
          <li v-for="(product, index) in searchPagination" :key="index">
            <ProductCard v-bind:product="product" /> 
          </li>
        <button v-if="showNextSearch()" class="next-btn" @click="nextResultPage"></button>
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
      let currentPage = this.searchPage;
      if (currentPage > 1) {
        this.searchPage--;
      }
    },
    nextResultPage() {
      let allInSearch = this.searchResults;
      let numOfPages = Math.ceil(allInSearch.length / 4);
      let currentPage = this.searchPage;
      if (currentPage < numOfPages) {
        this.searchPage++;
      }
    },
    showPreviousSearch() {
      return this.searchPage == 1 ? false : true;
    },
    showNextSearch() { 
      let allInSearch = this.searchResults;
      let numOfPages = Math.ceil(allInSearch.length / 4);
      return this.searchPage == (numOfPages) ? false : true;
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
  }
  h2 {
    text-align: center;
    font-family: 'font1';
    font-weight: 400;
    font-size: 40px;
  }
  button {
    border: none;
    width: 45px;
    height: 42px;
    align-self: center;
  }
  .previous-btn {
    background: url('../assets/svg/nav-L-btn.svg');
  }
  .next-btn {
    background: url('../assets/svg/nav-R-btn.svg');
  }
</style>