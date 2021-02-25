<template>
  <div class="register-comp-wrapper">
    <h2>Skapa konto</h2>
    <p>Fyll i dina uppgifter:</p>

    <form @submit.prevent>
      <div class="register-name">
        <label for="name">Namn</label>
        <input type="text" name="name" v-model="newUser.name">
        
        <label for="lastname">Efternamn</label>
        <input type="text" name="lastname" v-model="newUser.lastname">
      </div>

      <div class="register-adress">
        <label for="address">Address</label>
        <input type="text" name="address" v-model="newUser.adress">
      </div>

      <div class="register-postcode-and-city">
        <label for="postcode">Postkod</label>
        <input type="text" name="postcode" v-model="newUser.postcode">
        
        <label for="city">Postort</label>
        <input type="text" name="city" v-model="newUser.city">
      </div>

      <div class="register-email">
        <label for="email">Epost</label>
        <input type="text" name="email" v-model="newUser.email">
      </div>

      <div class="register-password">
        <label for="password">Lösenord</label>
        <input type="text" name="password" v-model="newUser.password">
      </div>

      <div class="register-create-account-btn">
        <input type="button" value="Skapa konto" @click="createNewUser">
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        name: '',
        lastname: '',
        adress: '',
        city: '',
        postcode: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    createNewUser() {
      alert(`My name is ${this.newUser.name} ${this.newUser.lastname} 
      and I live in ${this.newUser.city}. My adress is ${this.newUser.adress} 
      ${this.newUser.postcode} and here is my Email: "${this.newUser.email}" 
      and Password: "${this.newUser.password}"`)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';
.register-comp-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $color2;
  color: $color1;
  width: 624px;
  height: 656px;
  margin: 48px auto;
  padding: 32px;
  font-family: font2;
  h2 {
    font-family: font1;
    font-weight: 100;
    font-size: 48px;
  }
  p {
    font-family: font1;
    margin: 16px 16px 16px 0;
  }

  form {
    display: grid;
    grid-template-rows: repeat(6, 88px);
    align-items: center;
    width: 100%;
    height: 100%;
    label {
      margin-right: 8px;
    }
    input {
      margin-right: 8px;
      padding: 12px 16px;
      border-radius: 5px;
      outline: none;
      border: none;
    }
    .register-name {
      width: 100%;
      display: grid;
      grid-template-columns: 80px 1fr 80px 1fr;
      grid-template-rows: 32px;
      align-items: center;
    }
    .register-adress {
      width: 100%;
      display: grid;
      grid-template-columns: 80px 1fr;
      grid-template-rows: 32px;
      align-items: center;
    }
    .register-postcode-and-city {
      width: 100%;
      display: grid;
      grid-template-columns: 80px 1fr 60px 1fr;
      grid-template-rows: 32px;
      align-items: center;
    }
    .register-email {
      width: 100%;
      display: grid;
      grid-template-columns: 80px 1fr;
      grid-template-rows: 32px;
      align-items: center;
    }
    .register-password {
      width: 100%;
      display: grid;
      grid-template-columns: 80px 1fr;
      grid-template-rows: 32px;
      align-items: center;
    }
    .register-create-account-btn {
      justify-self: center;
    }
  }
}

</style>