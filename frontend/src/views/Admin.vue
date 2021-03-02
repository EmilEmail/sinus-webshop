<template>
  <div>
    <div v-if="isAdmin" class="admin-wrapper">
      <form @submit.prevent>
      <h2>{{ formHeader }}</h2>
        <label for="title">Titel</label>
        <input type="text" name="title" v-model="newProduct.title">
        <label for="price">Price</label>
        <input type="number" name="price" v-model="newProduct.price">
        <label for="shortDesc">Kort beskrivning</label>
        <input type="text" name="shortDesc" v-model="newProduct.shortDesc">
        <div class="radio-btns">
          <p>Kategori:</p>
          <input type="radio" id="skateboards" v-model="newProduct.category" name="category" value="skateboards">
          <label for="skateboards">Skateboards</label>
          <input type="radio" id="clothes" v-model="newProduct.category" name="category" value="clothes">
          <label for="clothes">Clothes</label>
          <input type="radio" id="wheels"  v-model="newProduct.category" name="category" value="wheels">
          <label for="wheels">Wheels</label>
        </div>
        <label for="longDesc">Lång beskrivning</label>
        <textarea name="longDesc" v-model="newProduct.longDesc">
        </textarea>
        <label for="imgFile">Bildadress</label>
        <input type="text" name="imgFile" v-model="newProduct.imgFile">
        <input type="submit" :value="submitBtn" @click="addProductToDB">
      </form>
      <div>
        <h2>Redigera produkter</h2>
        <div class="admin-products">
          <ul>
            <h3>Skateboards</h3>
            <li v-for="(item, index) in skateboards" :key="index" @click="editProduct(item)">
              {{ item.title }}
            </li>
          </ul>
          <ul>
            <h3>Kläder</h3>
            <li v-for="(item, index) in clothes" :key="index" @click="editProduct(item)">
              {{ item.title }}
            </li>
          </ul>
          <ul>
            <h3>Tillbehör</h3>
            <li v-for="(item, index) in wheels" :key="index" @click="editProduct(item)">
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>



    <div v-else>
      <p>Åtkomst nekad</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: true,
      submitBtn: 'LÄGG TILL',
      formHeader: 'Lägg till produkter',
      newProduct: {
        title: "",
        price: 0,
        shortDesc: "",
        category: "",
        longDesc: "",
        imgFile: "" // Asset logic on clientside
      }
    }
  },
  computed: {
    skateboards: function() {
      return this.$store.getters.skateboards;
    },
    clothes: function() {
      return this.$store.getters.clothes;
    },
    wheels: function() {
      return this.$store.getters.wheels;
    },
  },
  methods: {
    addProductToDB() {
      if (this.newProduct._id === undefined) {
        this.formHeader = 'Lägg till produkter';
        let newProduct = this.newProduct;
        this.$store.dispatch('addProductToDB', newProduct);
      }
      else {
        let newProduct = this.newProduct;
        this.$store.dispatch('editProductInDB', newProduct);
      }
    },
    editProduct(item) {
      this.formHeader = 'Redigera ' + item.title;
      this.submitBtn = 'ÄNDRA';
      this.newProduct = item;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/colors.scss';

  .admin-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      text-align: center;
      background-color: $accent-color;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 560px;
      margin: 56px;
      input {
        margin-bottom: 12px;
      }
      textarea {
        height: 56px;
        resize: none;
        margin-bottom: 12px;
      }
      input[type="submit"] {
        background-color: $color2;
        color: $color1;
        padding: 16px;
        width: 240px;
        margin: auto;
        cursor: pointer;
      }
      .radio-btns {
        p {
          margin-bottom: 4px;
        }
        label {
          margin: 0 24px 0 4px;
        }
      }
    }
    .admin-products {
      display: flex;
      justify-content: space-between;
      width: 560px;
      text-align: center;

      ul {
        margin: 16px 0;
        list-style: none;
        li {
          padding: 8px;
          border: 2px solid $color2;
          background-color:gray;
          cursor: pointer;
          margin: 8px;
        }
      }
    }
  }
</style>