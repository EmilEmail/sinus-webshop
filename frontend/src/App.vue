<template>
  <div>
    <router-link to="/">Products</router-link> |
    <router-link to="/checkout">Checkout</router-link>
    <NavComp />
    <router-view/>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue'
import NavComp from './components/NavComp.vue'
export default {
  components: {
    NavComp,
    FooterComp
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: 'font1' ;
    src: url('./assets/fonts/Play/Play-Regular.ttf');
  }
  @font-face {
    font-family: 'font2';
    src: url('./assets/fonts/Open_Sans/OpenSans-Regular.ttf');
  }

  * {
    margin: 0;
    padding: 0;
  }

</style>