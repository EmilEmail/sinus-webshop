<template>
  <div>
    <router-link to="/">Products</router-link> |
    <router-link to="/checkout">Checkout</router-link>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
  $color1: white;
  $color2: black;
  $accent-color: rgb(255, 152, 57);
  $yes-green: rgb(12, 145, 0);
  $no-red: red;
</style>