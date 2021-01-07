<template>
  <div class="text-center flex justify-center" v-if="weatherData">
    <div
      class="m-4 pt-8 px-3 w-1/2 bg-indigo-darker shadow-md"
      v-for="weather in weekWeather"
      :key="weather.id"
    >
      <h3>{{ weather.applicable_date | convertDate }}</h3>
      <img
        :src="getImage(weather.weather_state_name)"
        :alt="weather.weather_state_name"
        class="mt-2"
        width="80px"
        height="90px"
      />
      <div class="my-5 flex justify-between">
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
      return this.weatherData.weather.slice(1, 6);
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
