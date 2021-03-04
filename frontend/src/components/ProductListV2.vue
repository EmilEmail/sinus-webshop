<template>
  <div>
    <div class="product-list-wrapper">
      <div v-if="showOnlySearchResults">
        <SearchResults />
      </div>

      <div v-else>

        <div class="product-list-grid">
          <h2>Skateboards</h2>
          <button class="previous-btn" @click="previousBoardPage"></button>
          <ul>
              <li v-for="(product, index) in boardPagination" :key="index" @click="openModal(product)">
                <ProductCard v-bind:product="product" /> 
              </li>
          </ul>
          <button class="next-btn" @click="nextBoardPage"></button>
        </div>

        <div class="product-list-grid">
          <h2>Kläder</h2>
          <button class="previous-btn" @click="previousClothesPage"></button>
          <ul>
              <li v-for="(product, index) in clothesPagination" :key="index" @click="openModal(product)"> 
                <ProductCard v-bind:product="product" /> 
              </li>
          </ul>
          <button class="next-btn" @click="nextClothesPage"></button>
        </div>

        <div class="product-list-grid">
          <h2>Tillbehör</h2>
          <button class="previous-btn" @click="previousWheelsPage"></button>
          <ul>
              <li v-for="(product, index) in wheelsPagination" :key="index" @click="openModal(product)">
                <ProductCard v-bind:product="product" /> 
              </li>
          </ul>
          <button class="next-btn" @click="nextWheelsPage"></button>
        </div>
      </div>
      <div class="modal-wrapper">
        <ProductModal
          v-if="showModalUpdate" 
          :product='productItem'
          v-on:closeModal="ToCloseModal()" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchResults from './SearchResults.vue';
import ProductCard from './ProductCard.vue'
import ProductModal from './ProductModal.vue';
export default {
  data() {
    return {
      skateboardPage: 1,
      clothesPage: 1,
      wheelsPage: 1,

      showModal: false,
    }
  },
  props: {
    showOnlySearchResults: Boolean
  },
  components: {
    ProductCard,
    ProductModal,
    SearchResults
  },
  computed: {
    showModalUpdate: function() {
      return this.showModal;
    },
    boardPagination: function() {
      let allSkateboards = this.$store.state.categories.skateboards;
      let page = this.skateboardPage;

      let trimStart = (page - 1) * 4;
      let trimEnd = trimStart + 4;

      let trimmedData = allSkateboards.slice(trimStart, trimEnd);

      return trimmedData;
    },
    clothesPagination: function() {
      let allSkateboards = this.$store.state.categories.clothes;
      let page = this.clothesPage;

      let trimStart = (page - 1) * 4;
      let trimEnd = trimStart + 4;

      let trimmedData = allSkateboards.slice(trimStart, trimEnd);

      return trimmedData;
    },
    wheelsPagination: function() {
      let allSkateboards = this.$store.state.categories.wheels;
      let page = this.wheelsPage;

      let trimStart = (page - 1) * 4;
      let trimEnd = trimStart + 4;

      let trimmedData = allSkateboards.slice(trimStart, trimEnd);

      return trimmedData;
    },

  },
  methods: {
    openModal(item){
      this.showModal = false;
      this.showModal = true;
      this.productItem = item;
    },
    ToCloseModal() {
      this.showModal = false;
    },
    nextBoardPage() {
      let allInCategory = this.$store.state.categories.skateboards;
      let numOfPages = Math.ceil(allInCategory.length / 4);
      let currentPage = this.skateboardPage;
      if (currentPage < numOfPages) {
        this.skateboardPage++;
      }
    },
    nextClothesPage() {
      let allInCategory = this.$store.state.categories.clothes;
      let numOfPages = Math.ceil(allInCategory.length / 4);
      let currentPage = this.clothesPage;
      if (currentPage < numOfPages) {
        this.clothesPage++;
      }
    },
    nextWheelsPage() {
      let allInCategory = this.$store.state.categories.wheels;
      let numOfPages = Math.ceil(allInCategory.length / 4);
      let currentPage = this.wheelsPage;
      if (currentPage < numOfPages) {
        this.wheelsPage++;
      }
    },
    previousBoardPage() {
      let currentPage = this.skateboardPage;
      if (currentPage > 1) {
        this.skateboardPage--;
      }
    },
    previousClothesPage() {
      let currentPage = this.clothesPage;
      if (currentPage > 1) {
        this.clothesPage--;
      }
    },
    previousWheelsPage() {
      let currentPage = this.wheelsPage;
      if (currentPage > 1) {
        this.wheelsPage--;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';
.product-list-wrapper {
  display: flex;
  justify-content: center;
}
.product-list-grid {
  display: grid;
  grid-template-columns: 64px auto 64px;
  width: 1104px;
}
ul {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
  justify-content: left;
}
h2 {
  grid-column: 2;
  margin-left: 16px;
}
button {
  border: none;
  width: 45px;
  height: 42px;
  align-self: center;
}
.previous-btn {
  grid-column: 1;
  background: url('../assets/svg/nav-L-btn.svg');
}
.next-btn {
  grid-column: 3;
  background: url('../assets/svg/nav-R-btn.svg');
}
.modal-wrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -256px; 
  margin-left: -536px;
}
</style>