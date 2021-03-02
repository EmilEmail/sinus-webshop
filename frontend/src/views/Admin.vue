<template>
  <div>
    <div v-if="isAdmin" class="admin-wrapper">
      <form @submit.prevent>
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
        <input type="submit" value="LÄGG TILL" @click="addProductToDB">
      </form>
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
  methods: {
    addProductToDB() {
      let newProduct = this.newProduct;
      this.$store.dispatch('addProductToDB', newProduct);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/colors.scss';

  .admin-wrapper {
    display: flex;
    justify-content: center;
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
  }
</style>