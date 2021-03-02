<template>
  <div>
    <ProfileComp />
    <RegisterComp v-bind:registerHeader="'Dina uppgifter'" v-bind:ctaBtn="'Köp'" />
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

}
</script>

<style lang="scss" scoped>

</style> 
