<template>
  <div>
    <section class="cart-comp-btn" v-on:click="cartToggle">
        <div>{{ cartCounter }}</div>
    </section>

    <div class="cart-comp-modal" v-if="cartOn">
      <section class="cart">
        <div class="cart-h2-and-btn">
          <h2>Kundvagn</h2>
          <button>x</button>
        </div>

        <div class="cart-headers">
          <h4>Artikel</h4>
          <h4>Antal</h4>
          <h4 class="right-align">Pris</h4>
        </div>

        <ul>
          <li v-for="(item, index) in cart" :key="index" class="cart-items">
            <p class="item-name"> {{ item.name }}</p>
            <p> {{ item.amount }}</p>
            <button class="delete-btn">x</button>
            <p> {{ item.price }}</p>
          </li>
        </ul>

        <div class="cart-bottom">
          <h4>Summa</h4>
          <h4 class="centered">{{ totalAmount }}</h4>
          <h4 class="right-align">{{ totalPrice }}</h4>
        </div>

        <!-- Ta bort och gör till rätt komponent -->
        <button style="width: 150px; margin: auto;">GÅ TILL KASSA</button>
        <!-- Ta bort och gör till rätt komponent -->

      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartOn: false,
      cartCounter: 3,


      // Ta bort och lägg till rätt variablar
      cart : [
        {
          name: 'Item 1',
          price: 400,
          amount: 1
        },
        {
          name: 'Item 2',
          price: 200,
          amount: 1
        }
      ]
    }
  },
  computed: {
    totalAmount: function() {
        let total = 0;
        this.cart.forEach(item => {
          total += item.amount;
        });
        return total;
    },
    totalPrice: function() {
        let total = 0;
        this.cart.forEach(item => {
          total += item.price;
        });
        return total;
    }
  },

  methods: {
    cartToggle() {
      this.cartOn = !this.cartOn
    }
  }

}
</script>

<style lang="scss" scoped>

@import '../assets/css/colors.scss';

.cart-comp-btn {
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  background: transparent;
  background: url('../assets/svg/cart.svg');
  background-size: cover;
  div {
    background-color: $color1;
    width: 16px;
    border-radius: 8px;
    text-align: center;
    color: $color2;
  }
}
.cart-comp-modal {
  /* To put into middle */
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -330px; /* Negative half of height. */
  margin-left: -270px; /* Negative half of width. */
  /* To put into middle */

  width: 540px;
  height: 660px;
  background-color: $color1;
  color: $color2;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: font2;

  .cart {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 385px;
    height: 497px;
    background: $color2;
    color: $color1;
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
      grid-template-columns: 200px auto auto;
      margin: 0 32px;
      align-items: flex-end;
      border-bottom: 3px solid $color1;
      font-family: font1;
      .right-align {
        text-align: right;
        margin-right: 8px;
      }
    }
    .cart-bottom {
      display: grid;
      grid-template-columns: 200px auto auto;
      margin: 0 32px;
      padding: 8px 0;
      align-items: flex-end;
      border-top: 3px solid $color1;
      .right-align {
        text-align: right;
        margin-right: 8px;
      }
    }

    ul {
      list-style: none;
      margin: 0 32px 32px 32px;
      
      .cart-items {
        display: grid;
        grid-template-columns: 200px 40px 40px auto;
        justify-items: center;
        align-items: center;
        .item-name {
          justify-self: flex-start;
        }
      }
      button {
        width: 16px;
        height: 16px;
        justify-self: flex-start;
      }
    };
  }
}
</style>