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
      <button class="login-btn" @click="checkUser">PROFILE</button>
      <button class="cart-btn" @click="cartToggle">CART</button>
      <button>contact</button>
    </section>
    <section class="modals">
      <div v-if="cartOn">
        <CartComp />
      </div>
      <div v-if="loginOn">
        <LoginComp @closeLogin="checkUser" v-bind:profileData="profileData" />
      </div>
    </section>
  </div>
</template>

<script>
import CartComp from './CartComp.vue'
import LoginComp from '../components/LoginComp.vue'
export default {
  data() {
    return {
      cartOn: false,
      loginOn: false,
      profileData: {
        name: 'Emil Edberg'
      }
    }
  },
  components: {
    CartComp,
    LoginComp
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
    cartToggle() {
      this.cartOn = !this.cartOn;
    },
    loginToggle() {
      this.loginOn = !this.loginOn;
    },
    checkUser() {
      let user = this.$store.state.user;

      if (user.name === "Example Examplesson") {
        this.loginToggle();
      }
      else {
        this.$router.push('/profile');
      }
    }
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