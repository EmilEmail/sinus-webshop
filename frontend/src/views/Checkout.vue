<template>
  <div>
    <ProfileComp />
    <RegisterComp />
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
