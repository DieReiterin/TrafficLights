<template>
  <!-- <h2 v-if="show">THIS IS HEADLINE {{ this.$route.path }}</h2>
  <button style="width: 70px; height: 70px" @click="this.startTimer()">
    PUSH ME
  </button> -->
  <p
  style="font-size: 30px;text-align: center;"
  >SECONDS LEFT <br> -- {{ this.timeLeft }} --</p>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      show: false,
      timeLeft: 0,
      redTime: 10,
      yellowTime: 10,
      greenTime: 10,
      dimming: false,
      dimTime: 6,
    };
  },
  methods: {
    startLights() {
      const startFromRed = setTimeout(() => {
        if (this.$route.path !== "/red" && this.$route.path !== "/") {clearTimeout(startFromRed);return}

      this.timeLeft = this.redTime;
      const decrement = setInterval(() => {
        if (this.timeLeft === 1) {clearInterval(decrement);return}
        if (this.timeLeft < this.dimTime) {
          this.dimming === false ? this.dimming = true : this.dimming = false;
        }
        this.timeLeft--
      }, 1000);
      
      setTimeout(() => {
        this.$router.push("/yellow");
        this.timeLeft = this.yellowTime;
        const decrement = setInterval(() => {
          if (this.timeLeft === 1) {clearInterval(decrement);return}
          if (this.timeLeft < this.dimTime) {this.dimming === false ? this.dimming = true : this.dimming = false}
          this.timeLeft--
        }, 1000);
        setTimeout(() => {
          this.$router.push("/green");
          this.timeLeft = this.greenTime;
          const decrement = setInterval(() => {
            if (this.timeLeft === 1) {clearInterval(decrement);return}
            if (this.timeLeft < this.dimTime) {this.dimming === false ? this.dimming = true : this.dimming = false}
            this.timeLeft--
          }, 1000);
          setTimeout(() => {
            this.$router.push("/yellow");
            this.timeLeft = this.yellowTime;
            const decrement = setInterval(() => {
              if (this.timeLeft === 1) {clearInterval(decrement);return}
              if (this.timeLeft < this.dimTime) {this.dimming === false ? this.dimming = true : this.dimming = false}
              this.timeLeft--
            }, 1000);
            setTimeout(() => {
              this.$router.push("/red");
              this.startLights();
            }, this.yellowTime * 1000);
          }, this.greenTime * 1000);
        }, this.yellowTime * 1000);
      }, this.redTime * 1000);

      }, 0);

      const startFromYellow = setTimeout(() => {
        if (this.$route.path !== "/yellow") {clearTimeout(startFromYellow);return}
      
        this.timeLeft = this.yellowTime;
        const decrement = setInterval(() => {
          if (this.timeLeft === 1) {clearInterval(decrement);return}
          if (this.timeLeft < this.dimTime) {this.dimming === false ? this.dimming = true : this.dimming = false}
          this.timeLeft--
        }, 1000);

        setTimeout(() => {
          this.$router.push("/green");
          this.timeLeft = this.greenTime;
          const decrement = setInterval(() => {
            if (this.timeLeft === 1) {clearInterval(decrement);return}
            if (this.timeLeft < this.dimTime) {this.dimming === false ? this.dimming = true : this.dimming = false}
            this.timeLeft--
          }, 1000);
          setTimeout(() => {
            this.$router.push("/yellow");
            this.timeLeft = this.yellowTime;
            const decrement = setInterval(() => {
              if (this.timeLeft === 1) {clearInterval(decrement);return}
              if (this.timeLeft < this.dimTime) {this.dimming === false ? this.dimming = true : this.dimming = false}
              this.timeLeft--
            }, 1000);
            setTimeout(() => {
              this.$router.push("/red");
              this.startLights();
            }, this.yellowTime * 1000);
          }, this.greenTime * 1000);
        }, this.yellowTime * 1000);

      }, 0);

      const startFromGreen = setTimeout(() => {
        if (this.$route.path !== "/green") {clearTimeout(startFromGreen);return}

          this.timeLeft = this.greenTime;

          const decrement = setInterval(() => {
            if (this.timeLeft === 1) {clearInterval(decrement);return}
            if (this.timeLeft < this.dimTime) {this.dimming === false ? this.dimming = true : this.dimming = false}
            this.timeLeft--
          }, 1000);

          setTimeout(() => {
            this.$router.push("/yellow");

            this.timeLeft = this.yellowTime;

            const decrement = setInterval(() => {
              if (this.timeLeft === 1) {clearInterval(decrement);return}
              if (this.timeLeft < this.dimTime) {this.dimming === false ? this.dimming = true : this.dimming = false}
              this.timeLeft--
            }, 1000);

            setTimeout(() => {
              this.$router.push("/red");

              this.startLights();
            }, this.yellowTime * 1000);
          }, this.greenTime * 1000);

      }, 0);


    },
  },
  mounted() {
    this.startLights();
  },
  watch: {
    dimming() {
      // console.log('TOGGLE')
      this.$store.commit('toggleDimLights')
    }
  }
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  font-weight: 300;
  font-style: normal;
  font-display: swap;
  src: url("@/../public/fonts/Roboto-Light.woff2") format("woff2");
}
@font-face {
  font-family: "Roboto";
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url("@/../public/fonts/Roboto-Regular.woff2") format("woff2");
}
@font-face {
  font-family: "Roboto";
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: url("@/../public/fonts/Roboto-Medium.woff2") format("woff2");
}
@font-face {
  font-family: "Roboto";
  font-weight: 700;
  font-style: normal;
  font-display: swap;
  src: url("@/../public/fonts/Roboto-Bold.woff2") format("woff2");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
</style>
