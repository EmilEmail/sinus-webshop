<template>
  <div>
    <ProfileComp />
  </div>
</template>

<script>
import ProfileComp from '../components/ProfileComp.vue'
export default {
  components: { ProfileComp },
  beforeCreate() {
    let user = this.$store.state.user
    if (user.name === "") {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>