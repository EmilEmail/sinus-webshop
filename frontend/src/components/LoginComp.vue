<template>
<div>

  <!-- ProfileComp? Ta bort?? smådata?? -->
  <div class="login-comp middle-online" v-if="profileOnline">
    <div>
      <button @click="$emit('closeProfile')">close</button>
      <h2 style="background: black; color: white; width: 300px; height: 300px;">
        {{ profileData.name }}
        <button @click="profileOnline = false">log out</button>
      </h2>
      
    </div>
  </div>

  <!-- login -->
  <div class="login-comp middle-login" v-else>
    <div class="login-comp-wrapper" >

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
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      profileOnline: true
    }
  },
  props: {
    profileData: Object
  },
  methods: {
    checkLogin() {
      alert('Email: ' + this.email +' Lösenord: ' + this.password);
    }
  },

}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';
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