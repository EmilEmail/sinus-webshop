<template>
  <div @click="$emit('buttonClick')">
    <button class="button-comp">{{ buttonTitle }}</button>
  </div>
</template>

<script>
export default {
  props: {
    buttonTitle: String
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.button-comp {
  width: 180px;
  height: 50px;
  border-radius: 10px;
  background-color: $yes-green;
  border-color: $color1;
  color: $color1;
  cursor: pointer;
}
</style>