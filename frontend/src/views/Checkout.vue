<template>
  <div class="checkout-wrapper">
    <ProfileComp />
    <RegisterComp registerHeader="Dina uppgifter" ctaBtn="KÖP" 
    v-bind:isRegister="false" />
    <div class="paymanet-alt">
      <PaymantComp />
      <div class="buy-btn" @click="commitToBuy">
        <ButtonComp buttonTitle="KÖP" />
      </div>
    </div>
  </div>
</template>

<script>
import PaymantComp from '../components/PaymantComp.vue'
import ButtonComp from '../components/ButtonComp.vue'
import ProfileComp from '../components/ProfileComp.vue'
import RegisterComp from '../components/RegisterComp.vue'
export default {
  components: { 
    RegisterComp,
    ProfileComp,
    ButtonComp,
    PaymantComp,
  },

  methods: {
    commitToBuy() {
      this.$store.dispatch('commitToBuy');
      this.$router.push('/profile');
      this.$router.go();
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.checkout-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 64px 0;
}
.paymanet-alt {
  background-color: $color2;
  width: 600px;
  padding: 32px;

  .buy-btn {
  display: flex;
  justify-content: center;
  padding: 56px 0 40px;
  }
}
</style> 
