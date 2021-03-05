<template>
<div class="modal-background">
  <div class="login-comp middle-login">
    <div class="login-comp-wrapper" >
      <div class="login-h2-and-btn">
        <h2>Logga in</h2>
        <button class="close-btn" @click="$emit('loginToggle')"></button>
      </div>
      <p>Ange Email och lösenord:</p>
      <form @submit.prevent class="login-form">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password">
        <input class="default-btn" type="submit" value="LOGGA IN" @click="checkLogin">
        <input class="default-btn" type="submit" value="SKAPA KONTO" @click="toRegister">  
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      userOnline: true,
      showProfile: false,
      username: ''
    }
  },

  props: {
    profileData: Object
  },
  methods: {

    checkLogin() {
      let userLogin = {
        email: this.email,
        password: this.password
      };
      if (this.loginValidation(userLogin)) {
        this.$store.dispatch('checkLogin', userLogin);
        this.email = '';
        this.password = '';
        this.$emit('closeLogin');
      }
    },
    loginValidation(userLogin) {
      if (userLogin.email === '' || userLogin.password === '') {
        alert('Kontrollera inloggningsuppgifterna');
        return false;
      }
      return true;
    },

    logOut() {
      this.userOnline = false;
      this.$store.commit('logOutUser');
      this.noUser = true;
    },

    toRegister() {
      this.noUser = false;
      this.userOnline = false;
      this.$emit('closeLogin');
      if (this.$route.path !== '/register') {
        this.$router.push('/register');
      }
    }    
  },

}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';
.modal-background {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  left: 0%;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-btn {
 width: 26px;
 height: 30px;
 background-color: transparent;
 background: url(../assets/svg/profile.svg);
 background-size: cover;
}

.online-user {
  color: $color1;
  background: $color2;
}

.login-comp {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color1;
  padding: 64px;
}
.middle-login {
  /* To put into middle */
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -280px; /* Negative half of height. */
  margin-left: -376px; /* Negative half of width. */
  /* To put into middle */
}
.middle-online {
  /* To put into middle */
  position: absolute;
  right: 170px;
  top: 250px;
  margin-top: -150px; /* Negative half of height. */
  margin-left: -150px; /* Negative half of width. */
  /* To put into middle */
}
.login-comp-wrapper {
  background-color: $color2;
  color: $color1;
  width: 624px;
  height: 432px;
  padding: 32px;
  margin: auto;
  font-family: font2;
  .close-btn {
    align-self: start;
    margin-left: auto;
    width: 45px;
    height: 45px;
    background-image:  url('../assets/svg/close-btn.svg');
    background-size: cover;
    border: none;
    background-color: black;
  }
  .login-h2-and-btn {
    display: flex;
    justify-content: space-between;
  }
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
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 24px;
  align-items: center;
  input {
    padding: 8px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  .default-btn {
    justify-self: center;
    grid-column: 1/3;
    align-self: center;
    width: 160px;
  }
}
</style>