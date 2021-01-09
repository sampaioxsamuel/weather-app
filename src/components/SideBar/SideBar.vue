<template>
  <section id="search" class="h-screen font-sans">
    <Search />
    <TodayWeather />
  </section>
</template>

<script>
import Search from "./SearchButtons.vue";
import TodayWeather from "./TodayWeather.vue";
export default {
  components: { Search, TodayWeather },
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
