<template>

  <div class="payment-comp-wrapper">
    <div>
      <h2>Betalalternativ</h2>
      <p>Välj betalningsalternavtiv nedan:</p>
      <div>
        <div class="payment-comp-alternativ">
          <label for="paypal">PayPal
          <input type="radio" id="paypal" name="category" value="paypal">
          <span class="check-container check-container-paypal"></span>
          </label>
          
          <label for="credit">Credit
          <input type="radio" id="credit" name="category" value="credit">
          <span class="check-container check-container-credit"></span>
          </label>
          
          <label for="faktura" class="filter-container">Faktura
          <input type="radio" id="faktura" name="category" value="faktura">
          <span class="check-container check-container-faktura"></span>
          </label>
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
  margin-bottom: 32px;
  color: $color1;
  font-family: font1;
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
  .check-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 116px;
    height: 116px;
    margin-right: 8px;
    border-radius: 20px;
    cursor: pointer;
  }
  .check-container:after {
    content: "";
    display: none;
    width: 116px;
    height: 116px;
    border-radius: 20px;
  }
  input:checked ~ .check-container:after {
    display: block;
  }
  .check-container-paypal {
    background: url("../assets/svg/paypal-btn.svg");
  }
  .check-container-credit {
    background: url("../assets/svg/card-btn.svg");
  }
  .check-container-faktura {
    background: url("../assets/svg/invoice-btn.svg");
  }
  /*Själva check märket */
  .check-container-paypal:after {
    background: url("../assets/svg/paypal-marked-btn.svg");
  }
  .check-container-credit:after {
    background: url("../assets/svg/card-marked-btn.svg");
  }
  .check-container-faktura:after {
    background: url("../assets/svg/invoice-marked-btn.svg");
  }
</style>