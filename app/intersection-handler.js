"use strict";
const Intersection = require("./intersection");
const YELLOW_TIMER = 270000; // 4 minutes and 30 seconds 
const GENERAL_TIMER = 30000; // 30 seconds

// const YELLOW_TIMER = 7000; // 4 minutes and 30 seconds 
// const GENERAL_TIMER = 3000; // 30 seconds

class IntersectionHandler {
    constructor(){
        const _intersection = Intersection.create();

        this.run = () => {
            _intersection.initIntersectionState();
            start();
        };

        const start = () => {
            setTimeout(setYellowLights, YELLOW_TIMER);
        };

        const setYellowLights = () => {
            _intersection.nextIntersectionState(true);
            setTimeout(setLights, GENERAL_TIMER);
        }

        const setLights = () => {
            _intersection.nextIntersectionState();
            setTimeout(setYellowLights, YELLOW_TIMER);
        }
    }
}

exports.create = () => new IntersectionHandler(); 