<template>
  <footer class="footer-comp-wrapper">
    <div class="footer-social-media">
      <a href="https://www.facebook.com/" target="_blank"><div class="facebook"></div></a>
      <a href="https://instagram.com/" target="_blank"><div class="instagram"></div></a>
      <a href="https://www.youtube.com/" target="_blank"><div class="youtube"></div></a>
    </div>
    <a href="mailto:example@example.com">info@sinus-skateboards.com</a>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '../assets/css/colors.scss';

  .footer-comp-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    margin-top: 32px;
    background-color: $color2;
    a {
      color: $accent-color;
      font-family: 'font2';
      font-size: 12px;
      text-decoration: none;
    }      
  }

  .footer-social-media {
    display: flex;
    a {
      margin: 16px;
      div {
        height: 32px;
        width: 32px;
        background-size: cover;
      }
    }
  }
  .facebook {
    background: url('../assets/svg/facebook.svg') no-repeat;
  }
  .instagram {
    background: url('../assets/svg/instagram.svg') no-repeat;
  }
  .youtube {
    background: url('../assets/svg/youtube.svg') no-repeat;
  }
</style>