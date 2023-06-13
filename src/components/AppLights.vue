<template>
    <ul class="lights__list">
      <li 
      :class="{
        'active': $store.state.dimLights === false && color === 'red'
      }"
      class="lights__item lights__item-first"></li>
      <li 
      :class="{
        'active': $store.state.dimLights === false && color === 'yellow'
      }" 
      class="lights__item lights__item-sec"></li>
      <li 
      :class="{
        'active': $store.state.dimLights === false && color === 'green'
      }" 
      class="lights__item lights__item-third"></li>
    </ul>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "none",
    }
  }
}
</script>

<style scoped>
.lights__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 400px;
  margin: auto;
  border-radius: 25px;
  background-color: #000;
  list-style: none;
}
.lights__item {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 15px;
  border-radius: 50%;
}
.lights__item-first {
  background-color: red;
}
.lights__item-sec {
  background-color: yellow;
}
.lights__item-third {
  background-color: lawngreen;
}
.lights__item::after {
  content: '';
  position: absolute;
  top: center;
  right: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
}
.lights__item.active::after {
  background-color: rgba(0, 0, 0, 0);
}
</style>
