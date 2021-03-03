<template>
   <div class="product-list-grid-wrapper-top">
    <div>
      <h2>Skateboards</h2>
        <ul>
          <button class="previous-btn"></button>
            <li v-for="(skateboard, index) in pagination" :key="index">
              <ProductCard v-bind:product="skateboard" /> 
            </li>
          <button class="next-btn" @click="nextPage"></button>
        </ul>
      </div>
    <ProductModal />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import ProductModal from './ProductModal.vue';
export default {
  data() {
    return {
      skateboardPage: 1,
      skateboardPages: null
    }
  },
  components: {
    ProductCard,
    ProductModal
  },
  computed: {
    skateboards: function() {
      return this.$store.state.categories.skateboards;
    },
    pagination: function() {
      let allSkateboards = this.$store.state.categories.skateboards;
      let page = this.skateboardPage;

      let trimStart = (page - 1) * 4;
      let trimEnd = trimStart + 4;

      let trimmedData = allSkateboards.slice(trimStart, trimEnd);

      return trimmedData;
    }
  },
  methods: {
    nextPage() {
      let allSkateboards = this.$store.state.categories.skateboards;
      let skateboardPages = Math.ceil(allSkateboards.length / 4);
      if ((skateboardPages - 1) < this.skateboardPage) {
        this.skateboardPage++;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>