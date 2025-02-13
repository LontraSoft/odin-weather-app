import VisualCrossingInterface from './virtual_crossing';

let visualCrossing = new VisualCrossingInterface(window);

visualCrossing.fetchLocationWeather('Tulsa,OK')
    .then(res => {
	console.log(res);
    })
    .catch(err => {
	console.warn(err);
    });
