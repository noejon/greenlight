"use strict";
const TrafficLightState = require("./traffic-light-state").TrafficLightState;
require("console-stamp")(console, { pattern: "HH:MM:ss" });

class TrafficLight {
  constructor(name = "") {
    if (typeof name !== "string")
      throw new TypeError(
        "TrafficLight: Constructor expects a string as parameter"
      );
    let _state = TrafficLightState.Off;
    let _name = name;

    this.setState = state => {
      if (typeof state !== "number")
        throw new TypeError(
          "setState: The expected type for state is a number"
        );
      if (state < 1 || state > 4)
        throw new RangeError(
          "setState: the state value must be between 1 and 4"
        );
      _state = state;
    };

    this.getState = () => _state;

    this.nextState = () => {
      const oldState = _state;
      switch (_state) {
        case TrafficLightState.Green:
          this.setState(TrafficLightState.Yellow);
          break;
        case TrafficLightState.Yellow:
          this.setState(TrafficLightState.Red);
          break;
        case TrafficLightState.Red:
          this.setState(TrafficLightState.Green);
          break;
        default:
          this.setState(TrafficLightState.Off);
          break;
      }
      console.log(
        `${_name}: Switched from ${TrafficLightState.properties[oldState]
          .state} to ${TrafficLightState.properties[_state].state}`
      );
    };
  }
}

exports.create = name => new TrafficLight(name);
exports.isTrafficLight = (object) => object instanceof TrafficLight;
