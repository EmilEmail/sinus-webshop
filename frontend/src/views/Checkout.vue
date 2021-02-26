<template>
  <div>
    <LoginComp />
    <RegisterComp />
    <profile-comp />
  </div>
</template>

<script>

import LoginComp from '../components/LoginComp.vue'
import ProfileComp from '../components/ProfileComp.vue'
import RegisterComp from '../components/RegisterComp.vue'
export default {
  components: { 
    LoginComp, 
    RegisterComp,
    ProfileComp 
  },

}
</script>

<style lang="scss" scoped>

</style> 
