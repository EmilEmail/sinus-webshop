<template>
  <div class="search-comp-wrapper">
    <div class="form-wrapper">
      <form @click.prevent>
        <div class="search-comp-closed">
          <input type="text" name="search" class="search" v-model="searchObj.searchText" placeholder="Sök...">
          <button @click="categoryToggle = !categoryToggle" class="filter-btn"> Filter&#9660;</button>
          <input type="submit" value="" class="search-btn" @click="doSearch">
        </div>
      </form>
      <div v-if="categoryToggle" class="search-comp-open">
        <label class="filter-container">
          <input type="checkbox" v-model="searchObj.skateboards">
          <span class="check-container"></span>
          Skateboards
        </label>
        <label class="filter-container">
          <input type="checkbox" v-model="searchObj.clothes">
          <span class="check-container"></span>
          Kläder
        </label>
        <label class="filter-container">
          <input type="checkbox" v-model="searchObj.wheels">
          <span class="check-container"></span>
          Tillbehör
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      searchObj: {
        searchText: '',
        skateboards: false,
        clothes: false,
        wheels: false
      },
      categoryToggle: false,
    }
  },
  methods: {
    doSearch() {
      const searchObj = this.searchObj;
      this.$store.commit('doSearch', searchObj);
      this.$emit('searchClicked');
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.search-comp-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-wrapper {
  background-color: $color2;
  color: $accent-color;
  width: 624px;
  margin: 32px;
  padding: 8px 16px;
  font-family: 'font2';
}
form {
  width: 100%;
  }
.search-comp-closed {
  display: grid;
  grid-template-columns: repeat(auto-fill, 64px);
  grid-gap: 16px;

  input{
    font-size: 27px;
    outline: none;
    border: none;
  }
  input[type=text] {
    margin-right: 8px;
    padding: 0 16px;
    border-radius: 5px;
    grid-column: 1/6;
  }
  .filter-btn{
    grid-column: 6/8;
    color: $accent-color;
    font-size: 27px;
    background: none;
    outline: none;
    border: none;
  }
  .search-btn{
    grid-column-end: 9;
    width: 68px;
    height: 45px;
    background: url('../assets/svg/search-btn.svg');
    background-size: cover;
  }
}
/* Det öppna filtret */
.search-comp-open {
  display: flex;
  
}
.filter-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 8px 8px;;
  font-size: 18px;
  font-family: 'font1';
  font-weight: 400;

  
  input {
    display: none;
  }
  .check-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    margin-right: 8px;
    border-radius: 5px;
    background-color: $color1;
  }
  input:checked ~ .check-container {
  background-color: $accent-color;
  }
  input:checked ~ .check-container:after {
    display: block;
  }
  /*Själva check märket */
  .check-container:after {
    content: "";
    display: none;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>