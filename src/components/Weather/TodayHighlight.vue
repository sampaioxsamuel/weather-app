<template>
  <div v-if="today" class="">
    <h2 class="mt-10 ml-5">Today Highlight</h2>
    <div class="cards flex justify-center m-5">
      <div class="p-12 bg-indigo-darkest text-center w-1/2">
        <p>Wind status</p>
        <h3 class="text-5xl">{{ today.wind_speed | roundWind }}</h3>
        <p class="mt-4">WSW</p>
      </div>
      <div class="p-10 bg-indigo-darkest text-center mx-3 w-1/2">
        <p>Humidity</p>
        <h3 class="text-5xl">
          {{ today.humidity }}<span class="ml-1 font-light">%</span>
        </h3>
        <div class="flex justify-between">
          <p class="font-semibold text-grey-lighter">0</p>
          <p class="font-semibold text-grey-lighter">50</p>
          <p class="font-semibold text-grey-lighter">100</p>
        </div>
        <div class="inline-block bar mt-2">
          <div
            class="progress"
            :class="humidity"
            :style="{ width: today.humidity + '%' }"
          ></div>
        </div>
      </div>
    </div>
    <div class="cards flex justify-center m-5">
      <div class="p-12 bg-indigo-darkest text-center w-1/2">
        <p>Visibility</p>
        <h3 class="text-5xl">
          {{ today.visibility | roundVisility }}
          <span class="font-light">miles</span>
        </h3>
      </div>
      <div class="p-12 bg-indigo-darkest text-center mx-3 w-1/2">
        <p>Humidity</p>
        <h3 class="text-5xl">
          {{ today.air_pressure }}<span class="ml-3 font-light">mb</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    today() {
      return this.$store.getters.todayWeather;
    },
    humidity() {
      const humidity = this.$store.getters.todayWeather.humidity;
      if (humidity >= 50) {
        return "warning";
      } else if (humidity >= 100) {
        return "danger";
      }
      return "normal";
    },
  },
  filters: {
    roundWind(value) {
      return `${Math.round(value)} mph`;
    },
    roundVisility(value) {
      return value.toFixed(1).replace(".", ",");
    },
  },
};
</script>

<style>
.bar {
  width: 100%;
  height: 8px;
  border-radius: 80px;
  background: white;
}
.progress {
  height: 100%;
  border-radius: 80px;
}

.normal {
  background: #66ff70;
}

.warning {
  background: #ffec65;
}
.danger {
  background: #ff667c;
}
</style>
