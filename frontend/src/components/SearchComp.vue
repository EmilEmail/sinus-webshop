<template>
  <div class="search-comp-wrapper">
    <div class="form-wrapper">
      <form @click.prevent>
        <div class="search-comp-closed">
          <input type="search" name="search" class="search">
          <button @click="searchToggle = !searchToggle" class="filter-btn"> Filter&#9660;</button>
          <input type="button" value="" class="search-btn">
        </div>
      </form>
        <div v-if="searchToggle" class="search-comp-open">
          <label class="filter-container">
            <input type="checkbox" >
            <span class="check-container"></span>
            Skatebord
          </label>
          <label class="filter-container">
            <input type="checkbox">
            <span class="check-container"></span>
            Kläder
          </label>
          <label class="filter-container">
            <input type="checkbox">
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
      searchToggle: false,
    }
  },
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
  font-family: font1;
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
  input[type=search] {
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
  margin: 12px 0;
  font-size: 18px;
  
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
    background-color: #eee;
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