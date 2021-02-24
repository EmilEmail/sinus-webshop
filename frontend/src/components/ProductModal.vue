<template>
  <div>
    <div class="modal-grid-wrapper">
      <div class="product-modal-img">
        <img src="../assets/images/hoodie-fire.png" alt="Produktbild">
      </div>
      <div class="product-modal-info">
        <div class="row-1">
          <h2>Keps</h2>
          <button>X</button>
        </div>
        <div class="row-2">
          <h3>Description of product</h3>
          <p>
            Informationstexten om produkten. Lorem ipsum 
            dolor sit amet, consectetur adipiscing elit. 
            Scelerisque sodales nec egestas imperdiet.
          </p>
          <img src="../assets/images/big-stars.svg" alt="">
        </div>
        <div class="row-3">
          <button>LÄGG I KUNDVAGN</button>
          <p class="modal-price">399:-</p>
        </div>
      </div>
    </div>
    ProductModal
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.modal-grid-wrapper {
  display: grid;
  grid-template-columns: 465px 465px;
  grid-gap: 16px;
  width: 944px;
  border-style: solid;

  .product-modal-img {
    background-color: rgb(140, 140, 140);
    grid-column: 1;
    justify-self: center;
    width: 100%;
    img {
      height: 384px;
    }
  }
  .product-modal-info {
    background-color: black;
    color: white;
    grid-column: 2;
    display: grid;
    grid-template-rows: 64px 64px 64px 64px 64px;
  }
}
.row-1 {
  grid-row: 1;
  display: flex;
  flex-direction: row;
  button {
    margin-left: auto;
  }
}
.row-2 {
  grid-row: 2/5;
}
.row-3 {
  grid-row: 6;
  display: flex;
  flex-direction: row;
  p {
    font-family: 'font1';
    margin-left: auto;
  }
}
</style>