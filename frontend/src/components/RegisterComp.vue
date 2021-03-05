<template>
  <div class="register-comp-wrapper">
    <h2>{{ registerHeader }}</h2>
    <p>Fyll i dina uppgifter:</p>

    <form @submit.prevent class="register-form">
      <label for="name">Namn</label>
      <input type="text" name="name" v-model="newUser.firstname" v-on:change="$emit('validateFirstname', newUser.firstname)">
      <label class="text-align" for="lastname">Efternamn</label>
      <input type="text" name="lastname" v-model="newUser.lastname" v-on:change="$emit('validateLastname', newUser.lastname)">
      <label for="address">Address</label>
      <input class="fullrow" type="text" name="address" v-model="newUser.address.street" v-on:change="$emit('validateAddress', newUser.address.street)">
      <label for="postcode">Postkod</label>
      <input type="text" name="postcode" v-model="newUser.address.zip" v-on:change="$emit('validateZip', newUser.address.zip)">
      <label class="text-align" for="city">Postort</label>
      <input type="text" name="city" v-model="newUser.address.city" v-on:change="$emit('validateCity', newUser.address.city)">
      <label for="email">Epost</label>
      <input class="fullrow" type="text" name="email" v-model="newUser.email" v-on:change="$emit('validateEmail', newUser.email)">
      <label v-if="isRegister" for="password">Lösenord</label>
      <input v-if="isRegister" class="fullrow" type="text" name="password" v-model="newUser.password">
      <input v-if="isRegister" class="default-btn" type="button" v-bind:value="ctaBtn" @click="createNewUser">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        address: {
          street: '',
          zip: '',
          city: '',
        } 
      }
    }
  },
  created() {
    let user = this.$store.state.user;
    if (user._id !== undefined) {
      this.newUser = user;
      let name = user.name.split(' ');
      this.newUser.firstname = name[0];
      let lastname = '';
      for (let i = 1; i < name.length; i++) {
        lastname += name[i] + " ";
      }
      this.newUser.lastname = lastname;
    }
  },
  props: {
    registerHeader: String,
    ctaBtn: String,
    isRegister: Boolean,
  },
  methods: {
    createNewUser() {
      if (this.userValidation(this.newUser)) {
        this.newUser.name = this.newUser.firstname + ' ' + this.newUser.lastname;
        this.$store.dispatch('registerUser', this.newUser);
        this.$router.push('/');
      }
    },
    userValidation(newUser) {
      const userAsArray = Object.values(newUser);
      console.log(userAsArray);
      for (let i = 0; i < userAsArray.length; i++) {
        if (userAsArray[i] === ''){
          alert('Kontrollera uppgifterna');
          return false;
        }
      }
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';
.register-comp-wrapper {
  display: flex;
  flex-direction: column;
  background-color: $color2;
  color: $color1;
  width: 600px;
  height: auto;
  margin: auto;
  margin-bottom: 32px;
  padding: 32px;
  font-family: 'font2';
  h2 {
    font-family: 'font1';
    font-weight: 100;
    font-size: 40px;
  }
  p {
    font-family: 'font1';
    margin: 16px 16px 16px 0;
  }

    .register-form {
    display: grid;
    grid-template-columns: 80px 1fr 80px 1fr;
    gap: 24px;
    align-items: center;
    .fullrow {
      grid-column: 2/5;
    }
    input {
      padding: 8px;
      border: none;
      outline: none;
      border-radius: 5px;
    }
    .default-btn {
      justify-self: center;
      grid-column: 1/5;
      align-self: center;
      width: 160px;
    }
    .text-align {
      text-align: center;
    }
  }
}

</style>