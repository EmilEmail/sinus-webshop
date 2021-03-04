<template>
  <div class="profile-comp-wrapper">
    <div class="profile-comp-profile profil-comp-grid">
      <h2>Profil</h2>
      <img src="../assets/images/Profilimg.png" alt="profil image" class="col-1">
      <div class="col-profile profil-comp-grid">
        <div class="col-borders">
          <p>{{ user.name }}</p>
        </div>
        <p class="col-1">KundNr:</p>  
        <p class="col-5">{{ user._id }}</p>
        <p class="col-1">Email:</p>   
        <p class="col-5">{{ user.email }}</p>
        <p class="col-1">Adress:</p>
        <div class="col-5">
          <p>{{ user.address.street }}</p>
          <p>{{ user.address.zip + " " + user.address.city }}</p>
        </div>
      </div>
    </div>
    <div class="profil-comp-order-history">
      <h2>Orderhistorik</h2>
      <div class="profil-comp-grid">
        <p class="col-1">Ordernummer</p>
        <p class="col-2">Datum</p>
        <p class="col-4">Pris</p>
      </div>
      <ul class="profil-comp-order-history-border">
        <li v-for="(order, index) in orderHistery" :key="index" class="profil-comp-grid">
          <p class="col-1">{{ order.orderNr }}</p>
          <p class="col-2">{{ order.date }}</p>
          <button class="col-3">X</button>
          <p class="col-4">{{ order.price }}:-</p>
        </li>
      </ul>
      <div class="profil-comp-grid">
        <p class="col-1">Summa</p>
        <p class="col-4">{{ totalSum }}:-</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      orderHistery: [{
        orderNr: 123456789081,
        date: "20-20",
        price: 699
      },
      {
        orderNr: 123456927408,
        date: "21-20",
        price: 889
      },
      {
        orderNr: 12345694523,
        date: "22-20",
        price: 2599
      }]
    }
  },
  computed: {
    user: function() {
      return this.$store.state.user;
    },
    totalSum: function() {
      let total = 0;
      this.orderHistery.forEach(item => {
        total += item.price;
      });
      return total;
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';
.profile-comp-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-comp-profile {
  width: 600px;
  height: 272px;
  background-color: $color2;
  color: $color1;
  padding: 32px;
  margin-top: 32px;
  margin-bottom: 32px; //Detta ska bort eller ändras
  img {
    grid-row: 2/5;
  }
}
.profil-comp-order-history {
  width: 600px;
  height: auto;
  background-color: $color2;
  color: $color1;
  padding: 32px;
  margin-bottom: 32px; //Detta ska bort eller ändras
  h2 {
    margin-bottom: 16px;
  }
}
h2 {
  grid-column: 1/9;
  grid-row: 1;
  font-family: 'font1';
  font-size: 40px;
}
p {
  font-family: 'font2';
  font-size: 16px;
}
ul {
  margin: 8px 0 8px 0;
}
li {
  padding: 8px 0 8px 0;
}
.profil-comp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 64px);
  grid-template-rows: auto;
  grid-gap: 16px;
}
.col-1 {
  grid-column: 1/3;
}
.col-2 {
  grid-column: 3/5;
}
.col-3 {
  grid-column: 6;
}
.col-4 {
  grid-column: 7/9;
  text-align: end;
}
.col-5 {
  grid-column: 4/7;
  text-align: end;
}
.col-profile{
  grid-column: 3/9;

}
.col-borders{
  grid-column: 1/7;
  border-bottom: white 2px solid;
  padding-bottom: 8px;
}
.profil-comp-order-history-border{
  border-top: 2px solid $color1;
  border-bottom: 2px solid $color1;
}
</style>