class TemperatureData {
    constructor(temperature, min, max) {
	this.temperature = temperature;
	this.min = min;
	this.max = max;
    }
}

class WeatherData {
    constructor(conditions, feelsLikeTemp, temp, humidity, windSpeed) {
	this.conditions = conditions;
	this.feelsLikeTemp = feelsLikeTemp;
	this.temp = temp;
	this.humidity = humidity;
	this.windSpeed = windSpeed;
    }
}

export { TemperatureData, WeatherData };
