<template>
  <div class="login-comp-wrapper">
    <h2>Logga in</h2>
    <p>Ange Email och lösenord:</p>

    <form @submit.prevent class="login-form">
      <div class="login-form-input">
        <label for="email">Emil</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="login-form-input">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="login-btn">
        <input type="submit" value="Logga in" @click="checkLogin">  
      </div>
    </form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    checkLogin() {
      alert('Email: ' + this.email +' Lösenord: ' + this.password);
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.login-comp-wrapper {
  background-color: $color2;
  color: $color1;
  width: 624px;
  height: 432px;
  padding: 32px;
  margin: auto;
  font-family: font2;
  h2 {
    font-family: font1;
    font-weight: 100;
    font-size: 40px;
    
  }
  p {
    margin: 16px 0 32px 0;
  }

}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .login-form-input {
    display: grid;
    grid-template-columns: auto 500px;
    margin: 16px;
    align-items: center;
  }
  input[type="email"], input[type="password"] {
      width: 482px;
      padding: 8px;
      border: none;
      outline: none;
      border-radius: 5px;
  }
  .login-btn {
    align-self: center;
    margin-top: 96px;
  }
}
</style>