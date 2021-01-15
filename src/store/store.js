import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weathers: { weather: '', details: '' },
    woeid: '',
    coords: '',
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

      const getPosition = () => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject)
        })
      }

      if (!localStorage['coords']) {
        getPosition()
          .then(({ coords }) => {
            const { latitude, longitude } = coords
            state.coords = { latitude, longitude }
            localStorage.setItem('coords', JSON.stringify(state.coords))
          })
          .catch((err) => console.log('deu pau abigo', err))
      }

      state.coords = JSON.parse(localStorage.getItem('coords'))
    },

    getWoeid({ state, commit }) {
      axios.get(`${state.search_url}${state.coords.latitude},${state.coords.longitude}`)
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
