<template>
<div>
  <div class="payment-comp-wrapper">
    <div>
      <h2>Betalalternativ</h2>
      <p>Välj betalningsalternavtiv nedan:</p>
      <div>
        <div class="payment-comp-alternativ">
          <label>
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
          </label>
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
}
img {
  width: 116px;
  height: 116px;
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
</style>