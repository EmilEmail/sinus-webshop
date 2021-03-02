<template> 
<div>
  Register VIEW
  <RegisterComp v-bind:registerHeader="'Skapa konto'" v-bind:ctaBtn="'Skapa konto'" />
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