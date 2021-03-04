<template>
<div class="modal-background">
  <div class="cart-comp-modal">
    <section class="cart">
      <div class="cart-h2-and-btn">
        <h2>Kundvagn</h2>
        <button class="close-btn" @click="$emit('cartToggle')"></button>
      </div>

      <div class="cart-headers">
        <h4>Artikel</h4>
        <h4 class="center-align">Antal</h4>
        <h4 class="center-align">Pris</h4>
      </div>

      <ul>
        <li v-for="(item, index) in products" :key="index" class="cart-items">
          <p class="item-name"> {{ item.title }}</p>
          <button @click="removeAmountCart(index)">-</button>
          <p> {{ item.amount }}</p>
          <button @click="addAmountCart(item)">+</button>
          <p> {{ item.totalPruductPrice }}</p>
          <button @click="removeFromCart(item)">X</button>
        </li>
      </ul>

      <div class="cart-bottom">
        <h4>Summa</h4>
        <h4 class="center-align">{{ totalProduct }} St</h4>
        <h4 class="center-align">{{ totalPrice }} :-</h4>
      </div>
      <ButtonComp class="go-to-checkout" :buttonTitle="buttonTitle" @buttonClick="checkout" />
    </section>
  </div>
</div>
  
</template>

<script>
import ButtonComp from './ButtonComp.vue';
export default {
  components: { 
    ButtonComp 
    },
  data() {
    return {
      buttonTitle: "KÖP",
      buttonClick: "checkout",
      // Ta bort och lägg till rätt variablar
      cart: []
    }
  },
  computed: {
    totalPrice: function() {
        let total = 0;
        for (let item of this.$store.state.cart) {
          total += item.totalPruductPrice;
        }
        return total;
    },
    totalProduct: function() {
        let total = 0;
        for (let item of this.$store.state.cart) {
          total += item.amount;
        }
        return total;
    },
    products() {
      return this.$store.state.cart;
    },
  },
    props: {
      product: {}
  },
    methods: {
    checkout() {
      this.cartOn = false;
      this.$router.push('/checkout');
    },
    addAmountCart(item) {
      this.$store.commit('addToCart', item)
    },
    removeAmountCart(index) {
      this.$store.commit('removeAmountCart', index)
    },
    removeFromCart(item) {
      this.$store.commit('removeFromCart', item)
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/css/colors.scss';
.modal-background {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  left: 0%;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-comp-modal {
  padding: 64px;
  background-color: $color1;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: font2;
  .cart {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 400px;
    min-height: 480px;
    background: $color2;
    color: $color1;
    .close-btn {
      align-self: start;
      margin-left: auto;
      width: 45px;
      height: 45px;
      background-image:  url('../assets/svg/close-btn.svg');
      background-size: cover;
      border: none;
      background-color: black;
    }
    .cart-h2-and-btn {
      display: flex;
      justify-content: space-between;
      h2 {
        text-align: left;
        margin: 32px 0 16px 32px;
        font-family: font1;
      }
    }
    .cart-headers {
      display: grid;
      grid-template-columns: 2.5fr 0.9fr 1fr 0.2fr;
      margin: 0 32px;
      align-items: flex-end;
      border-bottom: 3px solid $color1;
      font-family: font1;
      .center-align {
        text-align: center;
      }
      h4 {
        text-align: left;
      }
    }
    .cart-bottom {
      display: grid;
      grid-template-columns: 3fr 1fr 1.5fr;
      margin: 0 32px;
      padding: 8px 0;
      align-items: flex-end;
      border-top: 3px solid $color1;
      .right-align {
        text-align: right;
        margin-right: 8px;
      }
      .center-align {
        text-align: center;
      }
    }
    ul {
      list-style: none;
      margin: 0 32px 32px 32px;
      .cart-items {
        display: grid;
        grid-template-columns: 2.5fr 0.2fr 0.5fr 0.2fr 1fr 0.2fr;
        justify-items: center;
        align-items: center;
        color: white;
        .item-name {
          justify-self: flex-start;
        }
      }
      button {
        width: 16px;
        justify-self: flex-start;
      }
    }
  }
  .go-to-checkout {
    align-self: center;
    margin: auto;
    margin-bottom: 16px;
  }
}
</style>