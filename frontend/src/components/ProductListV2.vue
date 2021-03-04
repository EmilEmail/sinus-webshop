<template>
   <div class="product-list-grid-wrapper-top">

    <div v-if="showOnlySearchResults">
      <SearchResults />
    </div>

    <div v-else>
      <div>
        <h2>Skateboards</h2>
        <ul>
          <button class="previous-btn" @click="previousBoardPage"></button>
            <li v-for="(product, index) in boardPagination" :key="index" @click="openModal(product)">
              <ProductCard v-bind:product="product" /> 
            </li>
          <button class="next-btn" @click="nextBoardPage"></button>
        </ul>
      </div>
      <div>
        <h2>Kläder</h2>
        <ul>
          <button class="previous-btn" @click="previousClothesPage"></button>
            <li v-for="(product, index) in clothesPagination" :key="index" @click="openModal(product)"> 
              <ProductCard v-bind:product="product" /> 
            </li>
          <button class="next-btn" @click="nextClothesPage"></button>
        </ul>
      </div>
      <div>
        <h2>Tillbehör</h2>
        <ul>
          <button class="previous-btn" @click="previousWheelsPage"></button>
            <li v-for="(product, index) in wheelsPagination" :key="index" @click="openModal(product)">
              <ProductCard v-bind:product="product" /> 
            </li>
          <button class="next-btn" @click="nextWheelsPage"></button>
        </ul>
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
ul {
  display: flex;
  list-style: none;
  justify-content: center;
}
h2 {
  text-align: center;
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
.modal-wrapper {
   /* To put into middle */
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -256px; /* Negative half of height. */
  margin-left: -536px; /* Negative half of width. */
  /* To put into middle */
}
</style>