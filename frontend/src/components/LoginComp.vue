<template>
<div>
  <!-- login -->
  <div class="login-comp middle-login">
    <div class="login-comp-wrapper" >

      <h2>Logga in</h2>
      <p>Ange Email och lösenord:</p>

      <form @submit.prevent class="login-form">
        <div class="login-form-input">
          <label for="email">Email</label>
          <input type="email" name="email" v-model="email">
        </div>
        <div class="login-form-input">
          <label for="password">Password</label>
          <input type="password" name="password" v-model="password">
        </div>
        <div class="login-btn">
          <input type="submit" value="Logga in" @click="checkLogin">  
        </div>
        <div class="new-user-btn">
          <input type="submit" value="Skapa konto" @click="toRegister">  
        </div>
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
      this.$store.dispatch('checkLogin', userLogin);
      this.email = '';
      this.password = '';

      this.$emit('closeLogin');

      // Gör så att man kommer till första sidan när man loggat in 
      // pga ingen uppdatering i checkout när man loggat in från den viewen
      // if (this.$route.path !== '/') {
      //   this.$router.push('/');
      // }
    },

    logOut() {
      this.userOnline = false;
      this.$store.commit('logOutUser');
      this.noUser = true;
    },

    toRegister() {
      this.noUser = false;
      this.userOnline = false;
      if (this.$route.path !== '/register') {
        this.$router.push('/register');
      }
    }    
  },

}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

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
  padding: 32px;
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
  input {
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