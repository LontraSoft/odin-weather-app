import * as HTML_CONSTANTS from './html_constants';
import VisualCrossingInterface from './virtual_crossing';

let visualCrossing = new VisualCrossingInterface(window);

    });
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
