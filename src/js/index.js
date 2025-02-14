import * as HTML_CONSTANTS from './html_constants';
import VisualCrossingInterface from './virtual_crossing';

let visualCrossing = new VisualCrossingInterface(window);

function updateWeatherConditions(conditions) {
    const weatherConditionsNode = document.querySelector(`.${HTML_CONSTANTS.CONDITION_TEXT_CLASS}`);
    weatherConditionsNode.textContent = conditions;
}

function updateTemperature(temperatureData, feelsLikeData) {
    const minTemperatureNode = document.querySelector(`.${HTML_CONSTANTS.TEMPERATURE_MIN_TEXT_CLASS}`);
    const temperatureNode = document.querySelector(`.${HTML_CONSTANTS.TEMPERATURE_TEXT_CLASS}`);
    const maxTemperatureNode = document.querySelector(`.${HTML_CONSTANTS.TEMPERATURE_MAX_TEXT_CLASS}`);
    const minFeelsLikeNode = document.querySelector(`.${HTML_CONSTANTS.FEELS_LIKE_MIN_TEXT_CLASS}`);
    const feelsLikeNode = document.querySelector(`.${HTML_CONSTANTS.FEELS_LIKE_TEXT_CLASS}`);
    const maxFeelsLikeNode = document.querySelector(`.${HTML_CONSTANTS.FEELS_LIKE_MAX_TEXT_CLASS}`);

    minTemperatureNode.textContent = temperatureData.min;
    temperatureNode.textContent = temperatureData.current;
    maxTemperatureNode.textContent = temperatureData.max;
    minFeelsLikeNode.textContent = feelsLikeData.min;
    feelsLikeNode.textContent = feelsLikeData.current;
    maxFeelsLikeNode.textContent = feelsLikeData.max;
}

function updateHumidity(humidity) {
    const humidityNode = document.querySelector(`.${HTML_CONSTANTS.HUMIDITY_TEXT_CLASS}`);
    humidityNode.textContent = humidity;
}

function updateWind(windSpeed) {
    const windNode = document.querySelector(`.${HTML_CONSTANTS.WIND_TEXT_CLASS}`);
    windNode.textContent = windSpeed;
}

function updateWeather(weatherData) {
    updateWeatherConditions(weatherData.conditions);
    updateTemperature(weatherData.temperature, weatherData.feelsLike);
    updateHumidity(weatherData.humidity);
    updateWind(weatherData.windSpeed);
}

function submitWeatherSearch(event) {
    event.preventDefault();
    
    const locationInputNode = document.getElementById(HTML_CONSTANTS.LOCATION_INPUT_ID);
    const location = locationInputNode.value;

    visualCrossing.fetchLocationWeather(location).then(res => {
	updateWeather(res);
    });
}

function attachEventHandlers() {
    const searchButtonNode = document.getElementById(HTML_CONSTANTS.LOCATION_SUBMIT_ID);
    
    searchButtonNode.addEventListener('click', submitWeatherSearch);
}

function runInitialWeatherFetch() {
    visualCrossing.fetchLocationWeather('Tulsa,OK')
	.then(res => {
	    updateWeather(res);
	})
	.catch(err => {
	    console.warn(err);
	});
}
    
function initialize() {
    attachEventHandlers();
    runInitialWeatherFetch();
}

initialize();
