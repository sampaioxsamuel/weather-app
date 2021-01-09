<template>
  <div class="text-white font-sans">
    <WeatherCard />
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
export default {
  props: ["weatherData"],
  components: { WeatherCard },
};
</script>

<style>
</style>
