<template>
  <div>
    <ProfileComp />
    <RegisterComp v-bind:registerHeader="'Dina uppgifter'" v-bind:ctaBtn="'Köp'" />
    <button @click="commitToBuy">KÖP</button>
  </div>
</template>

<script>

import ProfileComp from '../components/ProfileComp.vue'
import RegisterComp from '../components/RegisterComp.vue'
export default {
  components: { 
    RegisterComp,
    ProfileComp,
  },
  methods: {
    commitToBuy() {
      this.$store.dispatch('commitToBuy');
    }
  }

}
</script>

<style lang="scss" scoped>

</style> 
