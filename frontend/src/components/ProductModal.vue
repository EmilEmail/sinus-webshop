<template>
  <div class="product-modal-wrapper">
    <div class="product-modal-grid-wrapper">
      <div class="product-modal-img">
        <img v-bind:src="require(`../assets/images/${this.product.imgFile}`)" alt="Produktbild" />
      </div>
      <div class="product-modal-info">
        <div class="product-modal-info-row-1">
          <h2>{{ product.title }}</h2>
          <button v-on:click="closeModal"></button>
        </div>
        <div class="product-modal-info-row-2">
          <h3> {{ product.shortDesc }} </h3>
          <p> {{ product.longDesc }} </p>
          <img src="../assets/images/big-stars.svg" alt="">
        </div>
        <div class="product-modal-info-row-3">
          <ButtonComp :buttonTitle="buttonTitle" @buttonClick="addToCart(product)" />
          <p class="modal-price"> {{ product.price }}:- </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComp from './ButtonComp.vue';
export default {
  components: { 
    ButtonComp 
    },
  data() {
    return {
      buttonTitle: "LÄGG TILL I KUNDVAGN",
    }
  },
  props: {
    product: {}
  },
  methods: {
    closeModal() {
      this.$emit("closeModal")
    },
    addToCart(product) {
      this.$store.commit('addToCart', product);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.product-modal-wrapper {
  background: $color1;
  padding: 64px;
  text-align: -webkit-center;
}
.product-modal-grid-wrapper {
  display: grid;
  grid-template-columns: 465px 465px;
  grid-gap: 16px;
  width: 944px;
  border-style: solid 16px $color1;
  .product-modal-img {
    background-color: rgb(140, 140, 140);
    grid-column: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      height: 384px;
    }
  }
  .product-modal-info {
    background-color: $color2;
    color: $color1;
    grid-column: 2;
    display: grid;
    grid-template-rows: 64px 64px 64px 64px 64px;
    grid-gap: 16px;
  }
}
.product-modal-info-row-1 {
  grid-row: 1;
  display: flex;
  flex-direction: row;
  padding: 16px 16px 0 16px;
  h2 {
    font-family: 'font1';
    font-size: 40px;
  }
  button {
    align-self: start;
    margin-left: auto;
    width: 45px;
    height: 45px;
    background-image:  url('../assets/svg/close-btn.svg');
    background-size: cover;
    border: none;
    background-color: black;
  }
}
.product-modal-info-row-2 {
  grid-row: 2/5;
  padding: 0 16px 0 16px;
  text-align: left;
  h3 {
    font-family: 'font1';
    margin-bottom: 16px;
  }
  p {
    font-family: 'font2';
    margin-bottom: 16px;

  }
}
.product-modal-info-row-3 {
  grid-row: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px 16px 16px;
  p {
    font-family: 'font1';
    margin-left: auto;
    font-size: 56px;
  }
}
</style>