<template>
  <div class="nav-comp-wrapper">  
    <section class="nav">
      <img class="nav-logo" src="../assets/svg/sinus-logo-orange.svg" alt="Sinus logotype" v-on:click="showStartpage">
      <ul>
        <li v-on:click="showSkateboards">SKATEBOARDS</li>
        <li v-on:click="showClothes">KLÄDER</li>
        <li v-on:click="showAccesories">TILLBEHÖR</li>
      </ul>
    </section>
    <section class="nav-buttons">
      <button class="default-nav-btn login-btn" @click="checkUser"></button>
      <button class="default-nav-btn cart-btn" @click="cartToggle"></button>
      <button class="default-nav-btn contact-btn"></button>
    </section>
    <section class="modals">
      <div v-if="cartOn">
        <CartComp />
      </div>
      <div v-if="loginOn">
        <LoginComp @closeLogin="checkUser" />
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
    }
  },
  components: {
    CartComp,
    LoginComp
  },
  methods: {
    showSkateboards() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
      this.$store.commit('showSkateboards');
    },
    showClothes() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
      this.$store.commit('showClothes');
    },
    showAccesories() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
      this.$store.commit('showWheels');
    },
    showStartpage() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
      this.$store.commit('showAll');
    },
    cartToggle() {
      this.cartOn = !this.cartOn;
    },
    loginToggle() {
      this.loginOn = !this.loginOn;
    },
    checkUser() {
      let user = this.$store.state.user;

      if (user.name === "") {
        this.loginToggle();
      }
      else {
        if (this.$route.path !== '/profile') {
          this.$router.push('/profile');
        }
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
      cursor: pointer;
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
      .default-nav-btn {
        background-size: cover;
        height: 32px;
        width: 32px;
        border: none;
        outline: none;
        margin: 8px;
        cursor: pointer;
      }
      .login-btn {
        background: url('../assets/svg/profile.svg') no-repeat; 
      }
      .cart-btn {
        background: url('../assets/svg/cart.svg') no-repeat;
      }
      .contact-btn {
        background: url('../assets/svg/contact.svg') no-repeat;
      }
    }
  }
</style>