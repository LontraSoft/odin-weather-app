import * as HTML_CONSTANTS from './html_constants';
import VisualCrossingInterface from './virtual_crossing';

let visualCrossing = new VisualCrossingInterface(window);

function updateWeather(weatherData) {
    console.log('Updating weather');
    console.log(weatherData);
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
