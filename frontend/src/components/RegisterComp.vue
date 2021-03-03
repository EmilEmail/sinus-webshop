<template>
  <div class="register-comp-wrapper">
    <h2>{{ registerHeader }}</h2>
    <p>Fyll i dina uppgifter:</p>

    <form @submit.prevent class="register-form">
      <label for="name">Namn</label>
      <input type="text" name="name" v-model="form.firstname">
      <label class="text-align" for="lastname">Efternamn</label>
      <input type="text" name="lastname" v-model="form.lastname">
      <label for="address">Address</label>
      <input class="fullrow" type="text" name="address" v-model="newUser.address.street">
      <label for="postcode">Postkod</label>
      <input type="text" name="postcode" v-model="newUser.address.zip">
      <label class="text-align" for="city">Postort</label>
      <input type="text" name="city" v-model="newUser.address.city">
      <label for="email">Epost</label>
      <input class="fullrow" type="text" name="email" v-model="newUser.email">
      <label for="password">Lösenord</label>
      <input class="fullrow" type="text" name="password" v-model="newUser.password">
      <input class="default-btn" type="button" v-bind:value="ctaBtn" @click="createNewUser">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
      },

      newUser: {
        email: '',
        password: '',
        name: '',
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
    this.newUser = user;
    let name = user.name.split(' ');
    this.form.firstname = name[0];
    let lastname = '';
    for (let i = 1; i < name.length; i++) {
      lastname += name[i] + " ";
    }
    this.form.lastname = lastname;
  },
  props: {
    registerHeader: String,
    ctaBtn: String
  },
  methods: {
    createNewUser() {
      this.newUser.name = this.form.firstname + ' ' + this.form.lastname;
      this.$store.dispatch('registerUser', this.newUser);
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
  width: 624px;
  height: 656px;
  margin: 48px auto;
  padding: 32px;
  font-family: 'font2';
  h2 {
    font-family: 'font1';
    font-weight: 100;
    font-size: 48px;
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