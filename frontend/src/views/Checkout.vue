<template>
  <div>
    <ProfileComp />
    <RegisterComp registerHeader="Dina uppgifter" ctaBtn="KÖP" v-bind:isRegister="false" />
    <div class="buy-btn" @click="commitToBuy">
      <ButtonComp buttonTitle="KÖP" />
    </div>
  </div>
</template>

<script>
import ButtonComp from '../components/ButtonComp.vue'
import ProfileComp from '../components/ProfileComp.vue'
import RegisterComp from '../components/RegisterComp.vue'
export default {
  components: { 
    RegisterComp,
    ProfileComp,
    ButtonComp,
  },
  methods: {
    commitToBuy() {
      alert("jag funkar")
      this.$store.dispatch('commitToBuy');
    }
  }

}
</script>

<style lang="scss" scoped>
  .buy-btn {
    display: flex;
    justify-content: center;
    padding: 64px;
  }
</style> 
