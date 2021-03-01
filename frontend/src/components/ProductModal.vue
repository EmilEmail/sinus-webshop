<template>
  <div>
    <div class="product-modal-grid-wrapper">
      <div class="product-modal-img">
        <img v-bind:src="require(`../assets/images/${product.imgFile}`)" alt="Produktbild" />
      </div>
      <div class="product-modal-info">
        <div class="product-modal-info-row-1">
          <h2>{{ product.title }}</h2>
          <button>X</button>
        </div>
        <div class="product-modal-info-row-2">
          <h3> {{ product.shortDesc }} </h3>
          <p> {{ product.longDesc }} </p>
          <img src="../assets/images/big-stars.svg" alt="">
        </div>
        <div class="product-modal-info-row-3">
          <button @click="addToCart">LÄGG I KUNDVAGN</button>
          <p class="modal-price"> {{ product.price }}:- </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      product: {
        title: "Hoodie",
        price: 699,
        shortDesc: "Fire unisex",
        longDesc: "Skate ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
        imgFile: "hoodie-fire.png"
      }
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.product-modal-grid-wrapper {
  display: grid;
  grid-template-columns: 465px 465px;
  grid-gap: 16px;
  width: 944px;
  border-style: solid 16px white;
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
  }
}
.product-modal-info-row-2 {
  grid-row: 2/5;
  padding: 0 16px 0 16px;
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
  button {
    align-self: flex-end;
  }
  p {
    font-family: 'font1';
    margin-left: auto;
    font-size: 56px;
  }
}
</style>