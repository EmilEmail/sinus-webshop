<template>
  <div>
    Checkout
    <LoginComp />
    <RegisterComp />
  </div>
</template>

<script>
import LoginComp from '../components/LoginComp.vue'
import RegisterComp from '../components/RegisterComp.vue'
export default {
  components: { 
    LoginComp, 
    RegisterComp 
  },

}
</script>

<style lang="scss" scoped>

</style> 