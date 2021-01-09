import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weathers: { weather: '', details: '' },
    woeid: null,
    browserCoords: null,
    base_url: "https://www.metaweather.com/api/location",
    search_url: "https://www.metaweather.com/api/location/search/?lattlong=",
  },
  getters: {
    todayWeather(state) {
      return state.weathers.weather[0];
    },
    cityData(state) {
      return state.weathers.details;
    },
    weekWeather(state) {
      let week = state.weathers.weather.slice(1, 6)
      return week;
    }
  },
  mutations: {
    woeid(state, woeid) {
      state.woeid = woeid.woeid
    },
    weathers(state, weathers) {
      state.weathers = weathers
    }
  },
  actions: {
    getLocalCoord({ state }) {
      const success = (position) => {
        const { latitude, longitude } = position.coords;
        state.browserCoords = { latitude, longitude };
      };
      window.navigator.geolocation.getCurrentPosition(success);
    },
    getWoeid({ state, commit }) {
      axios.get(`${state.search_url}${state.browserCoords.latitude},${state.browserCoords.longitude}`)
        .then(r => commit('woeid', r.data[0]))
        .catch(err => commit('woeid', err))
    },
    getWeather({ state, commit }) {
      let data = {}
      axios.get(`${state.base_url}/${state.woeid}`).then((r) => {
        data = {
          weather: r.data.consolidated_weather,
          details: r.data.parent,
        };
        commit('weathers', data)
      });
    },
  }
})
