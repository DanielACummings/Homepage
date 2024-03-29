import WeatherService from "../services/weather-service.js"
import store from "../store.js"

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let weatherData = store.State.weather
  document.querySelector('#weather').innerHTML = weatherData.weatherTemplate
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather)
    WeatherService.getWeather()
  }
}
