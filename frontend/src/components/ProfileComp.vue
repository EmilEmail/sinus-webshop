<template>
  <div class="profile-comp-wrapper">
    <div class="profile-comp-profile">
        <h2>Profil</h2>
        <img src="../assets/images/Profilimg.png" alt="profil image">
      <div class="profile-comp-costumer">
        <p>kundnamn</p>
        <hr>
        <div class="profile-comp-grid-costumer">
          <p class="col-1">KundNr:</p>
          <p class="col-2">123456778</p>
          
          <p class="col-1">Email:</p>   
          <p class="col-2">kund@kundson.se</p>
          
          <p class="col-1">Address:</p>
          <div class="col-2 no-padding">
            <p class="col-2">körtelvägen 781</p>
            <p class="col-2">12344 enskede</p>
          </div>
        </div>
      </div>
    </div>

    <div class="profil-comp-order-history">
      <h2>Orderhistorik</h2>
      <div class="profil-comp-order-history-grid">
        <p class="col-1">Ordernummer</p>
        <p class="col-2">Datum</p>
        <p class="col-4">Pris</p>
      </div>
      <ul class="profil-comp-order-history-border">
        <li class="profil-comp-order-history-grid">
          <p class="col-1">7123687213</p>
          <p class="col-2">20-20</p>
          <button class="col-3">X</button>
          <p class="col-4">399:-</p>
        </li>
        <li class="profil-comp-order-history-grid">
          <p class="col-1">7123687213</p>
          <p class="col-2">20-20</p>
          <button class="col-3">X</button>
          <p class="col-4">399:-</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.profile-comp-profile {
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 25% 75%;
  width: 592px;
  height: 272px;
  background-color: $color2;
  color: $color1;
  border: 16px solid $color2;
  margin-bottom: 16px; //Detta ska bort
  img {
    grid-column: 1;
    grid-row: 2;
  }
  .profile-comp-costumer {
    grid-column: 2;
    grid-row: 2/3;
    .no-padding {
      p {
        padding: 0;
      }
    }
    hr {
      margin-bottom: 16px;
    }
  }
}
.profile-comp-grid-costumer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  .col-1 {
    grid-column: 1;
  }
  .col-2 {
    grid-column: 2;
    justify-self: end;
  }
}
.profil-comp-order-history {
  width: 592px;
  height: 272px;
  background-color: $color2;
  color: $color1;
  border: 16px solid $color2;
  margin-bottom: 16px; //Detta ska bort
}
h2 {
  grid-column: 1;
  grid-row: 1;
  font-family: 'font1';
  font-size: 40px;
}
p {
  padding-bottom: 8px;
  font-family: 'font2';
  font-size: 16px;
}
.profil-comp-order-history-grid {
  display: grid;
  grid-template-columns: 64px 64px 64px 64px 64px 64px 64px;
  grid-gap: 16px;
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
    margin-left: auto;
  }
}
  .profil-comp-order-history-border{
    border-top: 2px solid $color1;
    border-bottom: 2px solid $color1;
  }
</style>