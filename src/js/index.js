import VisualCrossingInterface from './virtual_crossing';

let visualCrossing = new VisualCrossingInterface(window);

visualCrossing.fetchLocationWeather('London,UK').catch(err => {
    console.warn(err);
});
