<template>
  <div class="product-list-grid-wrapper-top">
    <div class="product-list-img">
      <img v-bind:src="require(`../assets/images/${product.imgFile}`)" alt="Produktbild" />
    </div>
    <div class="product-list-background">
      <div class="product-list-text">
        <h3>{{ product.title }}</h3>
        <p>{{ product.shortDesc }}</p>
      </div>
      <div class="product-list-grid-wrapper-bottom">
        <!-- <div class="product-list-stars"> -->
        <img src="../assets/images/big-stars.svg" alt="">
        <!-- </div> -->
        <!-- <div class="product-list-price"> -->
          <p> {{ product.price }}:- </p>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
  
}
</script>

<style lang="scss" scoped>
.product-list-grid-wrapper-top {
  margin: auto;
  display: grid;
  justify-content: center;
  width: 225px;
  height: 385;
}
.product-list-img {
  background-color: rgb(140, 140, 140);
  grid-row: 1;
  width: 207px;
  height: 224px;
  img {
    height: 224px;
  }
}
.product-list-grid-wrapper-bottom {
  display: flex;
  padding: 8px;
  align-items: baseline;
  grid-row: 2;
  p {
    margin-left: auto;
    font-family: 'font1';
    font-size: 36px;
  }
  img {
    width: 80px;
  }
}
.product-list-background {
  background-color: black;
  color: white;
  grid-row: 2;
  width: 207px;
  height: 120px;
  margin-bottom: 16px;
  display: grid;
  grid-template-rows: 0.7fr 0.7fr;
}
.product-list-text {
  grid-row: inherit;
  margin-top: 4px;
  margin-left: 8px;
  grid-row: 1/2;
  h3 {
  font-family: 'font1';
  }
  p {
    font-family: 'font1';
    font-size: 16px;
    margin-bottom: 16px;
  }
}
</style>