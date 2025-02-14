import { TemperatureData, WeatherData } from './weather_data'

const API_KEY = 'F2DHRQD5ABQFKKKTJZRRL72TK';

export default class VisualCrossingInterface {
    constructor(win) {
	this.win = win;
    }

    #parseDayData(dayData) {
	const CONDITIONS = dayData.conditions;
	const TEMPERATURE = dayData.temp;
	const TEMPERATURE_MIN = dayData.tempmin;
	const TEMPERATURE_MAX = dayData.tempmax;
	const FEELS_LIKE_TEMP = dayData.feelslike;
	const FEELS_LIKE_TEMP_MIN = dayData.feelslikemin;
	const FEELS_LIKE_TEMP_MAX = dayData.feelslikemax;
	const HUMIDITY = dayData.humidity;
	const WIND = dayData.windspeed;

	const TEMPERATURE_DATA = new TemperatureData(TEMPERATURE, TEMPERATURE_MIN, TEMPERATURE_MAX)
	const FEELS_LIKE_DATA = new TemperatureData(FEELS_LIKE_TEMP, FEELS_LIKE_TEMP_MIN, FEELS_LIKE_TEMP_MAX);
	const WEATHER_DATA = new WeatherData(CONDITIONS, FEELS_LIKE_DATA, TEMPERATURE_DATA, HUMIDITY, WIND);
	
	return WEATHER_DATA;
    }

    async fetchLocationWeather(location) {
	const FETCH_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?&key=${API_KEY}&contentType=json`;
	let response = await fetch(FETCH_URL, {mode: 'cors'});
	let data = await response.json();
	let dayData = data.days[0];
	
	return this.#parseDayData(dayData);
    }
}
