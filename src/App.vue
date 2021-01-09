<template>
  <div id="app">
    <div class="grid main">
      <SideBar />
      <Weather />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar/SideBar.vue";
import Weather from "./components/Weather/Weather.vue";

export default {
  components: { SideBar, Weather },
  name: "App",
  computed: {
    browserCoords() {
      return this.$store.state.browserCoords;
    },
    woeid() {
      return this.$store.state.woeid;
    },
  },
  mounted() {
    this.$store.dispatch("getLocalCoord");
  },
  watch: {
    browserCoords() {
      this.$store.dispatch("getWoeid");
    },
    woeid(value) {
      if (value) {
        this.$store.dispatch("getWeather");
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  background: #100e1d;
}

.grid {
  display: grid;
  grid-template-columns: 450px 1fr;
  gap: 1rem;
}
</style>
