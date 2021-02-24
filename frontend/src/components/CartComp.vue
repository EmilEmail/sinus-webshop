<template>
  <div>
    <section class="cart-comp-btn" v-on:click="cartToggle">
        <div>{{ cartCounter }}</div>
    </section>

    <div class="cart-comp-modal" v-if="cartOn">
      <section class="cart">
          <h2>Kundvagn</h2>
        <div class="cart-headers">
          <h4>Articel</h4>
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
        <div class="cart-headers">
          <h4>Summa</h4>
          <h4 class="centered">{{ totalAmount }}</h4>
          <h4 class="right-align">{{ totalPrice }}</h4>
        </div>


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



.cart-comp-btn {
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 50px;
  background: transparent;
  background: url('../assets/svg/cart.svg');
  background-size: cover;
  div {
    align-self: flex-end;
    background-color: white;
    width: 16px;
    border-radius: 8px;
    text-align: center;
    color: black;
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
  background-color: grey;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  .cart {
    width: 385px;
    height: 497px;
    background: black;
    color: white;
    h2 {
      text-align: left;
      margin-left: 32px;
    }
    .cart-headers {
      display: grid;
      grid-template-columns: 200px auto auto;
      margin: 0 32px;
      align-items: flex-end;
      border-bottom: 3px solid white;
      .right-align {
        text-align: right;
        margin-right: 8px;
      }
    }

    ul {
      list-style: none;
      margin: 0 32px;
      padding: 0;
      border-bottom: 3px solid white;
      
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