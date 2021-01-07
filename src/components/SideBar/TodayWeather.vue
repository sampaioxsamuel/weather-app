<template>
  <div
    v-if="data.length"
    class="mt-16 flex flex-col text-center items-center justify-center"
  >
    <div class="items-end mr-2">
      <img :src="weatherImage" width="150px" height="150px" alt="Weather" />
    </div>
    <div class="mt-5">
      <div class="flex items-center">
        <h1 class="xxl text-grey-light">{{ currentTemperature }}</h1>
        <span class="text-grey-dark text-3xl pt-6">ºC</span>
      </div>
      <div class="text-center text-grey-dark mt-10">
        <p class="font-semibold text-2xl">{{ stateName }}</p>
        <p class="mt-12">Today ⸳ {{ todayDate }}</p>
        <p class="location font-bold mt-4">{{ data[0].details.title }}</p>
      </div>
    </div>
  </div>
  <div v-else class="text-white text-center mt-32">Loading Data...</div>
</template>

<script>
export default {
  computed: {
    currentTemperature() {
      return Math.round(this.data[0].weather[0].the_temp);
    },
    weatherImage() {
      return require(`@/assets/imgs/${this.data[0].weather[0].weather_state_name}.png`);
    },
    stateName() {
      return this.data[0].weather[0].weather_state_name;
    },
    todayDate() {
      let date = new Date(
        `${this.data[0].weather[0].applicable_date}T12:00:00Z`
      );
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
      const currentWeekDay = days[date.getDay()];
      const currentMonth = months[date.getMonth()];
      return `${currentWeekDay}, ${date.getDate()} ${currentMonth}`;
    },
  },
  props: {
    data: {},
  },
  data() {
    return {
      LocationIcon: require("@/assets/icons/location.svg"),
    };
  },
};
</script>

<style scoped>
.xxl {
  font-size: 6rem;
}

.location::before {
  content: url("../../assets/icons/location.svg");
  top: -3px;
  left: 24px;
  position: absolute;
}

.location {
  position: relative;
}
</style>
