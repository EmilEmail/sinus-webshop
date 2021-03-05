<template>
  <div class="search-results-wrapper">
    <div class="search-list-grid">
      <h2>Sökresultat</h2>
      <button v-if="showPreviousSearch()" class="previous-btn" @click="previousResultPage"></button>
      <ul>
        <li v-for="(product, index) in searchPagination" :key="index">
          <ProductCard v-bind:product="product" /> 
        </li>
      </ul>
      <button v-if="showNextSearch()" class="next-btn" @click="nextResultPage"></button>
    </div>
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
  .search-list-grid {
  display: grid;
  grid-template-columns: 64px auto 64px;
  width: 1104px;
  margin: 72px 0;
  }
  ul {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  justify-content: left;
  li {
    cursor: pointer;
  }
  }
  h2 {
  grid-column: 2;
  margin-left: 16px;
  font-family: 'font1';
  font-weight: 400;
  font-size: 40px;
  }
  button {
    border: none;
    width: 45px;
    height: 42px;
    align-self: center;
    cursor: pointer;
  }
  .previous-btn {
    grid-column: 1;
    background: url('../assets/svg/nav-L-btn.svg');
  }
  .next-btn {
    grid-column: 3;
    background: url('../assets/svg/nav-R-btn.svg');
  }
</style>