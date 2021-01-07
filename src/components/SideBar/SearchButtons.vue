<template>
  <div class="flex justify-around items-center pt-8">
    <a
      href="#"
      class="no-underline text-center py-2 px-3 bg-grey-dark text-white shadow-md hover:bg-grey-darker"
      >Search for Places</a
    >
    <a
      href="#"
      class="location no-underline py-2 px-3 bg-grey-dark text-white shadow-md rounded-full hover:bg-grey-darker"
      @click="$emit('getWeather')"
    >
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

<style scoped>
.location::before {
  content: url("../../assets/icons/gps.svg");
  width: 100%;
  height: 100%;
  left: 8px;
  top: 8px;
  position: absolute;
}
.location {
  position: relative;
  width: 40px;
  height: 40px;
}
</style>
