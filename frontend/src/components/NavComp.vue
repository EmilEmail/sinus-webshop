<template>
  <div class="nav-comp-wrapper">
    <section class="nav">
      <img class="nav-logo" src="../assets/images/sinus-logo-orange.svg" alt="Sinus logotype">
      <ul>
        <li v-on:click="showSkateboards">SKATEBOARDS</li>
        <li v-on:click="showHoodies">HOODIES</li>
        <li v-on:click="showTshirts">T-SHIRTS</li>
        <li v-on:click="showCaps">KEPSAR</li>
        <li v-on:click="showAccesories">TILLBEHÖR</li>
      </ul>
    </section>
    <section class="nav-buttons">
      <button>profile</button>
      <CartComp />
      <button>contact</button>
    </section>
  </div>
</template>

<script>
import CartComp from './CartComp.vue'
export default {
  components: {
    CartComp
  },
  methods: {
    showSkateboards() {
      alert("Skateboards");
    },
    showHoodies() {
      alert("Hoodies");
    },
    showTshirts() {
      alert("Tshirts");
    },
    showCaps() {
      alert("Kepsar");
    },
    showAccesories() {
      alert("Tillbehör");
    },
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/colors.scss';

  .nav-comp-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 160px;
    background-color: $color2;
    color: $color1;
    .nav {
      display: flex;
      align-items: center;
    }
    .nav-logo {
      height: 120px;
      padding: 0 32px;
    }
    ul {

      display: flex;
      padding: 0;
      list-style: none;
      li {
        font-family: 'font1';
        margin: 16px;
        cursor: pointer;
      }
    }
    .nav-buttons {
      display: flex;
      padding: 16px 32px;
    }
  }
</style>