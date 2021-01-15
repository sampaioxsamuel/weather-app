<template>
  <div
    class="text-center flex flex-wrap justify-between p-6"
    v-if="weekWeather"
  >
    <div
      class="pt-5 px-3 md:w-1/6 sm:w-1/2 bg-indigo-darkest shadow-md"
      v-for="weather in weekWeather"
      :key="weather.id"
    >
      <h3>{{ weather.applicable_date | convertDate }}</h3>
      <img
        :src="getImage(weather.weather_state_name)"
        :alt="weather.weather_state_name"
        class="mt-2"
        width="80px"
        height="80px"
      />
      <div class="my-5 px-1 flex justify-between">
        <p class="font-semibold">{{ weather.max_temp | roundTemp }}ºC</p>
        <p class="font-semibold text-grey">
          {{ weather.min_temp | roundTemp }}ºC
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["weatherData"],
  computed: {
    weekWeather() {
      return this.$store.getters.weekWeather;
    },
  },
  methods: {
    getImage(name) {
      return require(`@/assets/imgs/${name}.png`);
    },
  },
  filters: {
    convertDate(value) {
      const date = new Date(`${value}T12:00:00Z`);
      const tomorrow = new Date().getDate();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const currentWeekDay = days[date.getDay()];
      const months = [
        "Jan",
        "Feb",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      if (date.getDate() === tomorrow) {
        return `Tomorrow `;
      } else {
        return `${currentWeekDay}, ${date.getDate()} ${
          months[date.getMonth()]
        } `;
      }
    },
    roundTemp(value) {
      return Math.round(value);
    },
  },
};
</script>

<style>
</style>
