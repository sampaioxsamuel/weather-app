<template>
  <section class="">
    <div id="search" class="w-1/3 h-screen font-sans">
      <Search @getWeather="$emit('getWeather')" />
      <TodayWeather :data="weatherData" />
    </div>
  </section>
</template>

<script>
import Search from "./SearchButtons.vue";
import TodayWeather from "./TodayWeather.vue";
export default {
  props: {
    weatherData: {
      type: Array,
      required: true,
    },
    getLocalWoeid: {
      type: Function,
      required: true,
    },
    getWeather: {
      type: Function,
      required: true,
    },
  },
  components: { Search, TodayWeather },
  data() {
    return {
      woeid: "",
    };
  },
};
</script>

<style scoped>
#search::before {
  content: "";
  width: 100%;
  min-height: 100vh;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: -1;
  opacity: 0.05;
  background: url("../../assets/imgs/Cloud-background.png") center no-repeat;
  max-width: 100%;
}

#search {
  z-index: 1;
  position: relative;
  background-color: #191e38;
}
</style>