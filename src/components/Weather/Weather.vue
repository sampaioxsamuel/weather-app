<template>
  <main class="text-white font-sans">
    <WeatherCard />
    <TodayHighlight />
    <footer class="flex justify-center">
      <p class="font-semibold text-grey-dark m-10">
        Samuel Nogueira @ DevChallenge.io
      </p>
    </footer>
  </main>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
import TodayHighlight from "./TodayHighlight.vue";

export default {
  components: { WeatherCard, TodayHighlight },
};
</script>

<style>
</style>
