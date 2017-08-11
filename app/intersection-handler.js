"use strict";
const Intersection = require("./intersection");
const YELLOW_TIMER = 270000; // 4 minutes and 30 seconds
const GENERAL_TIMER = 30000; // 30 seconds

class IntersectionHandler {
  constructor() {
    const _intersection = Intersection.create();
    _intersection.initIntersectionState();

    this.run = () => {
      this.start();
    };

    this.start = () => {
      setTimeout(this.setYellowLights, YELLOW_TIMER);
    };

    this.setYellowLights = () => {
      _intersection.nextIntersectionState(true);
      setTimeout(this.setLights, GENERAL_TIMER);
    };

    this.setLights = () => {
      _intersection.nextIntersectionState();
      setTimeout(this.setYellowLights, YELLOW_TIMER);
    };
  }
}

exports.create = () => new IntersectionHandler();
exports.YELLOW_TIMER = YELLOW_TIMER;
exports.GENERAL_TIMER = GENERAL_TIMER;
