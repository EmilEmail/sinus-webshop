<template>
  <div>
  <div class="checkout-wrapper">
    <ProfileComp />
    <RegisterComp registerHeader="Dina uppgifter" ctaBtn="KÖP" 
    v-bind:isRegister="false" 
    @validateFirstname="validateFirstname(formInput)" 
    @validateLastname="validateLastname(formInput)" 
    @validateAddress="validateAddress(formInput)" 
    @validateCity="validateCity(formInput)"
    @validateZip="validateZip(formInput)"
    @validateEmail="validateEmail(formInput)"
    />
    <div class="paymanet-alt">
      <PaymantComp />
      <div class="buy-btn" @click="commitToBuy">
        <ButtonComp buttonTitle="KÖP" />
      </div>
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
  data() {
    return {
      hasFirstname: false,
      hasLastname: false,
      hasAddress: false,
      hasZip: false,
      hasCity: false,
      hasEmail: false
    }
  },
  methods: {
    commitToBuy() {
      if (this.hasFirstname &&
      this.hasLastname &&
      this.hasAddress &&
      this.hasZip &&
      this.hasCity &&
      this.hasEmail
      ) {
        this.$store.dispatch('commitToBuy');
        alert("funka")
      }
      else {
        alert('funka inte')
      }
    },
    validateFirstname(formInput) {
      if (formInput !== '') {
        this.hasFirstname = true;
      }
    },
    validateLastname(formInput) {
      if (formInput !== '') {
        this.hasLastname = true;
      }
    },
    validateAddress(formInput) {
      if (formInput !== '') {
        this.hasAddress = true;
      }
    },
    validateZip(formInput) {
      if (formInput !== '') {
        this.hasZip = true;
      }
    },
    validateCity(formInput) {
      if (formInput !== '') {
        this.hasCity = true;
      }
    },
    validateEmail(formInput) {
      if (formInput !== '') {
        this.hasEmail = true;
      }
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
  margin-bottom: 32px;
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
