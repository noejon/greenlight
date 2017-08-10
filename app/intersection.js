"use strict";
const TrafficLight = require("./traffic-light");
const TrafficLightState = require("./traffic-light-state").TrafficLightState;

class Intersection {
  constructor() {
    const _north = TrafficLight.create("North");
    const _south = TrafficLight.create("South");
    const _east = TrafficLight.create("East");
    const _west = TrafficLight.create("West");

    const changeOneTrafficLight = (trafficLight, yellowOnly) => {
      if (
        TrafficLight.isTrafficLight(trafficLight) &&
        trafficLight.getState() !== TrafficLightState.Off
      ) {
        if (yellowOnly && trafficLight.getState() === TrafficLightState.Green) {
          trafficLight.nextState();
        } else if (!yellowOnly) trafficLight.nextState();
      }
    };

    this.initIntersectionState = () => {
        _north.setState(TrafficLightState.Green);
        _south.setState(TrafficLightState.Green);
        _east.setState(TrafficLightState.Red);
        _west.setState(TrafficLightState.Red);
        console.log(`The lights are initialized as follow:
        - N: Green
        - S: Green
        - E: Red
        - W: Red`);
    }

    this.nextIntersectionState = (yellowOnly) => {
        changeOneTrafficLight(_north, yellowOnly);
        changeOneTrafficLight(_south, yellowOnly);
        changeOneTrafficLight(_east, yellowOnly);
        changeOneTrafficLight(_west, yellowOnly);
    }

    /**
         * ChangeOneTrafficLight is private but needs testing.
         * Thus a __test_only__ object is create for unit test purpose only
         * Using tools like strip code and enclose those lines within specific
         * comments could remove this line from a production system.
         */

    this.__test_only__ = { 
        changeOneTrafficLight: changeOneTrafficLight,
        north: _north,
        south: _south,
        east: _east,
        west: _west
    };
  }
}

exports.create = () => new Intersection();
