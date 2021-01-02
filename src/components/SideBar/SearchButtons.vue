<template>
  <div class="flex justify-around items-center pt-8">
    <a
      href="#"
      class="no-underline text-center py-4 px-4 bg-grey-dark text-white shadow-md hover:bg-grey-darker"
      >Search for Places</a
    >
    <a
      href="#"
      class="no-underline py-2 px-3 bg-grey-dark text-white shadow-md rounded-full hover:bg-grey-darker"
      @click="$emit('getWeather')"
    >
      <img :src="GPSIcon" alt="Icon" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      GPSIcon: require("@/assets/icons/gps.svg"),
    };
  },
};
</script>

<style>
</style>