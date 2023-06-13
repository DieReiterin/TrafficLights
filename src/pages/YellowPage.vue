<template>
    <!-- <h1>This is YELLOW page</h1> -->
    <div class="container">
      <app-lights
      :color=pageColor
      ></app-lights>
    </div>
</template>

<script>
import AppLights from '@/components/AppLights.vue'

export default {
  components: {
    AppLights
  },
  data() {
    return {
      pageColor: "yellow",
    };
  },
}
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  min-height: 600px;
  margin: 0 auto;
  padding: 35px 50px 100px;
  background-color: slategray;
}
</style>
