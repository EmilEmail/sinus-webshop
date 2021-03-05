<template>
  <div>
    <div class="for-admin" v-if="isAdmin">
      <router-link to="/admin">Edit</router-link>
    </div>
    <NavComp />
    <router-view/>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue'
import NavComp from './components/NavComp.vue'
export default {
  beforeCreate() {
    this.$store.dispatch('getProducts');
    this.$store.dispatch('checkLocalstorage');
  },
  components: {
    NavComp,
    FooterComp
  },
  computed: {
    isAdmin: function() {
      return this.$store.state.isAdmin;
    }
  }
}
</script>

<style lang="scss">
  @import './assets/css/colors.scss';

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
    outline: none;
  }
  .for-admin {
    background: $color2;
    text-align: center;
    a {
      background: $color2;
      color: $color1;
      font-size: 12px;
      text-decoration: none;
    }
  }

</style>