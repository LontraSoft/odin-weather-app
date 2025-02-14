class TemperatureData {
    constructor(current, min, max) {
	this.current = current;
	this.min = min;
	this.max = max;
    }
}

class WeatherData {
    constructor(conditions, feelsLike, temperature, humidity, windSpeed) {
	this.conditions = conditions;
	this.feelsLike = feelsLike;
	this.temperature = temperature;
	this.humidity = humidity;
	this.windSpeed = windSpeed;
    }
}

export { TemperatureData, WeatherData };
