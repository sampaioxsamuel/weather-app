<template>
  <div id="app">
    <DefaultSideBar
      :weatherData="weathers"
      :getLocalWoeid="getLocalWoeid"
      :getWeather="getWeather"
      @getWeather="getWeather(woeid)"
    />
  </div>
</template>

<script>
import DefaultSideBar from "./components/SideBar.vue";
import axios from "axios";

export default {
  components: { DefaultSideBar },
  name: "App",
  data() {
    return {
      weathers: [],
      woeid: null,
      browserCoords: {},
      base_url: "https://www.metaweather.com/api/location",
      search_url: "https://www.metaweather.com/api/location/search/?lattlong=",
    };
  },
  methods: {
    getBrowserCoords() {
      const success = (position) => {
        const { latitude, longitude } = position.coords;
        this.browserCoords = { latitude, longitude };
      };
      window.navigator.geolocation.getCurrentPosition(success);
    },
    getLocalWoeid() {
      axios
        .get(
          `${this.search_url}${this.browserCoords.latitude},${this.browserCoords.longitude}`
        )
        .then((r) => {
          this.woeid = r.data[0].woeid;
        });
    },
    getWeather(woeid) {
      axios.get(`${this.base_url}/${woeid}`).then((r) => {
        this.weathers.push({
          weather: r.data.consolidated_weather,
          details: r.data.parent,
        });
      });
      console.log("opa");
    },
  },
  mounted() {
    this.getBrowserCoords();
  },
  watch: {
    browserCoords() {
      this.getLocalWoeid();
    },
    woeid(value) {
      if (value !== "") {
        this.getWeather(this.woeid);
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
