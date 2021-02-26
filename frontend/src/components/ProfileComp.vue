<template>
  <div class="profile-comp-wrapper">
    <div class="profile-comp-profile profil-comp-grid">
        <h2>Profil</h2>
        <img src="../assets/images/Profilimg.png" alt="profil image" class="col-1">
        <div class="col-profile">
        <div class="col-borders">
          <p>{{ user.name }}</p>
        </div>
          <p class="col-2">KundNr:</p>  
          <p class="col-5">123456778</p>
          
          <p class="col-2">Email:</p>   
          <p class="col-5">{{ user.email }}</p>
          
          <p class="col-2">Address:</p>
          <div class="col-5">
            <p>{{ user.address.street }}</p>
            <p>{{ user.address.zip + user.address.city}}</p>
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
      user:{
        email: "customer@example.com",
        name: "David Lundholm",
        role: "customer",
        address: {
          street: "Tokitokvägen 4",
          zip: "123 46",
          city: "Tokbergaskogen"
        }
      },
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
  width: 592px;
  height: 272px;
  background-color: $color2;
  color: $color1;
  border: 16px solid $color2;
  margin-bottom: 16px; //Detta ska bort eller ändras
  img {
    grid-row: 2/5;
  }
}
.profil-comp-order-history {
  width: 592px;
  height: 272px;
  background-color: $color2;
  color: $color1;
  border: 16px solid $color2;
  margin-bottom: 16px; //Detta ska bort eller ändras
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
  grid-column: 5/9;
  text-align: end;
}
.col-profile{
  grid-column: 3/9;
}
.col-borders{
  grid-column: 1/7;
  border-bottom: white 2px solid;
}
.profil-comp-order-history-border{
  border-top: 2px solid $color1;
  border-bottom: 2px solid $color1;
}
</style>