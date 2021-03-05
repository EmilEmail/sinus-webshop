<template>
<div>
  <div class="payment-comp-wrapper">
    <div>
      <h2>Betalalternativ</h2>
      <p>Välj betalningsalternavtiv nedan:</p>
      <div>
        <div class="payment-comp-alternativ">
          <label for="paypal">PayPal
          <input type="radio" id="paypal" name="category" value="paypal">
          <span class="check-container-paypal"></span>
          </label>
          
          <label for="credit">Credit
          <input type="radio" id="credit" name="category" value="credit">
          <span class="check-container img-credit"></span>
          </label>
          
          <label for="faktura" class="filter-container">Faktura
          <input type="radio" id="faktura" name="category" value="faktura">
          <span class="check-container img-fakrura"></span>
          </label>


          <!-- <label>
            <p>Kreditkort</p>
            <input type="radio" name="credit" id="credit">
            <img src="../assets/svg/card-btn.svg" alt="">
          </label>
          <label>
            <p>PayPal</p>
            <input type="radio" name="paypal" id="paypal">
            <img src="../assets/svg/paypal-btn.svg" alt="">
          </label>
          <label>
            <p>Faktura</p>
            <input type="radio" name="faktura" id="faktura">
            <img src="../assets/svg/invoice-btn.svg" alt="">
          </label> -->


        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.payment-comp-wrapper {
  display: flex;
  justify-content: center;
  width: 600px;
  height: 272px;
  margin-bottom: 32px; //Detta ska bort eller ändras
  color: $color1;
}
.payment-comp-alternativ {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 600px;
  height: 180px;
  background-color: $basic-gray;
  color: $color2;
  border-radius: 5px;
  margin-top: 32px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
}
h2 {
  font-family: 'font1';
    font-weight: 100;
    font-size: 40px;
    margin-bottom: 16px;
}
p {
  font-family: 'font1';
}
input {
    display: none;
  }
  //PayPal
  .check-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 116px;
    height: 116px;
    margin-right: 8px;
    border-radius: 5px;
    background: url("../assets/svg/paypal-btn.svg");
    cursor: pointer;
  }
  input:checked ~ .check-container {
  background-color: $color1;
  
  }
  input:checked ~ .check-container:after {
    display: block;
  }
  /*Själva check märket */
  .check-container:after {
    content: "";
    display: none;
    width: 116px;
    height: 116px;
    background: url("../assets/svg/paypal-marked-btn.svg");
  }
  //Credit
  .check-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 116px;
    height: 116px;
    margin-right: 8px;
    border-radius: 5px;
    background: url("../assets/svg/paypal-btn.svg");
    cursor: pointer;
  }
  input:checked ~ .check-container {
  background-color: $color1;
  
  }
  input:checked ~ .check-container:after {
    display: block;
  }
  /*Själva check märket */
  .check-container:after {
    content: "";
    display: none;
    width: 116px;
    height: 116px;
    background: url("../assets/svg/paypal-marked-btn.svg");
  }
  //Faktura//PayPal
  .check-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 116px;
    height: 116px;
    margin-right: 8px;
    border-radius: 5px;
    background: url("../assets/svg/paypal-btn.svg");
    cursor: pointer;
  }
  input:checked ~ .check-container {
  background-color: $color1;
  
  }
  input:checked ~ .check-container:after {
    display: block;
  }
  /*Själva check märket */
  .check-container:after {
    content: "";
    display: none;
    width: 116px;
    height: 116px;
    background: url("../assets/svg/paypal-marked-btn.svg");
  }
</style>