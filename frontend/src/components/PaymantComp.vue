<template>
<div>
  <div class="payment-comp-wrapper">
    <div>
      <h2>Betalaltenativ</h2>
      <p>Välj betalningsalternavtiv nedan:</p>
      <div>
        <div class="payment-comp-alternativ">
          <p>Kreditkort</p>
          <img src="../assets/svg/card-btn.svg" alt="">
          <p>PayPal</p>
          <img src="../assets/svg/paypal-btn.svg" alt="">
          <p>Faktura</p>
          <img src="../assets/svg/invoice-btn.svg" alt="">
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
  width: 600px;
  height: 272px;
  margin-top: 32px;
  margin-bottom: 32px; //Detta ska bort eller ändras
  color: $color1;
}
.payment-comp-alternativ {
  display: flex;
  flex-direction: row;
  width: 550px;
  height: 180px;
  background-color: gray;
  color: $color2;
}
img {
  width: 116px;
  height: 116px;
}
h2 {
  font-family: 'font1';
    font-weight: 100;
    font-size: 48px;
}
p {
  font-family: 'font1';
}
</style>