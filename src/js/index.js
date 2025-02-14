import VisualCrossingInterface from './virtual_crossing';

let visualCrossing = new VisualCrossingInterface(window);

    });
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
    runInitialWeatherFetch();
}

initialize();
