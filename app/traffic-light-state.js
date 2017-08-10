'use strict';

const trafficLightState = {
    Green : 1,
    Yellow: 2,
    Red: 3,
    Off: 4,
    properties : {
        1: { state: "Green" },
        2: { state: "Yellow" },
        3: { state: "Red" },
        4: { state: "Off" }
    }
}
if (Object.freeze) Object.freeze(trafficLightState);
exports.TrafficLightState = trafficLightState;