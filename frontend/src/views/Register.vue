<template> 
<div>
  Register VIEW
  <RegisterComp v-bind:registerHeader="'Skapa konto'" v-bind:ctaBtn="'SKAPA KONTO'" v-bind:isRegister="true" />
</div>
</template>

<script>
import RegisterComp from '../components/RegisterComp.vue';
export default {
  components: {
    RegisterComp
  }
}
</script>

<style>

</style>