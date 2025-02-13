const API_KEY = 'F2DHRQD5ABQFKKKTJZRRL72TK';

export default class VisualCrossingInterface {
    constructor(win) {
	this.win = win;
    }

    async fetchLocationWeather(location) {
	try {
	    const FETCH_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?&key=${API_KEY}&contentType=json`;
	    let response = await fetch(FETCH_URL, {mode: 'cors'});
	    let data = await response.json();
	    
	    this.win.console.log(response);
	    this.win.console.log(data);
	}
	catch {
	    throw new Error('Could not fetch weather data for location');
	}
    }
}
