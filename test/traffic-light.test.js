"use strict";
const expect = require("chai").expect;
const TrafficLight = require("../app/traffic-light");
const TrafficLightState = require("../app/traffic-light-state")
  .TrafficLightState;

describe("Testing the TrafficLight class", () => {
  describe("# create", () => {
    it("should not throw an error when parameter is not set", () => {
      expect(() => TrafficLight.create()).not.to.throw();
    });
    it("should not throw an error when parameter is set to string", () => {
      expect(() => TrafficLight.create("North")).not.to.throw();
    });
    it("should throw a TypeError when parameter is set to an array", () => {
      expect(() => TrafficLight.create([])).to.throw(
        TypeError,
        "TrafficLight: Constructor expects a string as parameter"
      );
    });
    it("should throw a TypeError when parameter is set to an object", () => {
      expect(() => TrafficLight.create({})).to.throw(
        TypeError,
        "TrafficLight: Constructor expects a string as parameter"
      );
    });
    it("should throw a TypeError when parameter is set to a boolean", () => {
      expect(() => TrafficLight.create(true)).to.throw(
        TypeError,
        "TrafficLight: Constructor expects a string as parameter"
      );
    });
    it("should throw a TypeError when parameter is set to a number", () => {
      expect(() => TrafficLight.create(42)).to.throw(
        TypeError,
        "TrafficLight: Constructor expects a string as parameter"
      );
    });
  });
  describe("# isTrafficLight", () => {
    it("should return true when a traffic light is tested", () => {
      const trafficLight = TrafficLight.create();
      expect(TrafficLight.isTrafficLight(trafficLight)).to.equal(true);
    });
    it("should return false when an array is tested", () => {
      expect(TrafficLight.isTrafficLight([])).to.equal(false);
    });
    it("should return false when a boolean is tested", () => {
      expect(TrafficLight.isTrafficLight(true)).to.equal(false);
    });
    it("should return false when an object is tested", () => {
      expect(TrafficLight.isTrafficLight({})).to.equal(false);
    });
    it("should return false when a number is tested", () => {
      expect(TrafficLight.isTrafficLight(42)).to.equal(false);
    });
    it("should return false when a undefined is tested", () => {
      expect(TrafficLight.isTrafficLight(undefined)).to.equal(false);
    });
    it("should return false when null is tested", () => {
      expect(TrafficLight.isTrafficLight(null)).to.equal(false);
    });
  });
  describe("# Class instantiation", () => {
    it("should set the default state to OFF", () => {
      const trafficLight = TrafficLight.create();
      expect(trafficLight.getState()).to.equal(TrafficLightState.Off);
    });
    it("should set the default state to a number", () => {
      const trafficLight = TrafficLight.create();
      expect(trafficLight.getState()).to.be.an("number");
    });
    it("should not set the default state to GREEN", () => {
      const trafficLight = TrafficLight.create();
      expect(trafficLight.getState()).to.not.equal(TrafficLightState.Green);
    });
    it("should not set the default state to YELLOW", () => {
      const trafficLight = TrafficLight.create();
      expect(trafficLight.getState()).to.not.equal(TrafficLightState.Yellow);
    });
    it("should not set the default state to RED", () => {
      const trafficLight = TrafficLight.create();
      expect(trafficLight.getState()).to.not.equal(TrafficLightState.Red);
    });
    it("should not set the default state to undefined", () => {
      const trafficLight = TrafficLight.create();
      expect(trafficLight.getState()).to.not.equal(undefined);
    });
    it("should not set the default state to null", () => {
      const trafficLight = TrafficLight.create();
      expect(trafficLight.getState()).to.not.equal(null);
    });
  });
  describe("# setState", () => {
    it("should set the current state to GREEN", () => {
      const trafficLight = TrafficLight.create();
      trafficLight.setState(TrafficLightState.Green);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Green);
    });
    it("should set the current state to YELLOW", () => {
      const trafficLight = TrafficLight.create();
      trafficLight.setState(TrafficLightState.Yellow);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Yellow);
    });
    it("should set the current state to RED", () => {
      const trafficLight = TrafficLight.create();
      trafficLight.setState(TrafficLightState.Red);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Red);
    });
    it("should set the current state to OFF", () => {
      const trafficLight = TrafficLight.create();
      trafficLight.setState(TrafficLightState.Off);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Off);
    });
    it("should throw a TypeError when attempting to set state to undefined", () => {
      const trafficLight = TrafficLight.create();
      expect(() => trafficLight.setState(undefined)).to.throw(
        TypeError,
        "setState: The expected type for state is a number"
      );
    });
    it("should throw a TypeError when attempting to set state to a string", () => {
      const trafficLight = TrafficLight.create();
      expect(() => trafficLight.setState("")).to.throw(
        TypeError,
        "setState: The expected type for state is a number"
      );
    });
    it("should throw a TypeError when attempting to set state to a boolean", () => {
      const trafficLight = TrafficLight.create();
      expect(() => trafficLight.setState(true)).to.throw(
        TypeError,
        "setState: The expected type for state is a number"
      );
    });
    it("should throw a TypeError when attempting to set state to an Array", () => {
      const trafficLight = TrafficLight.create();
      expect(() => trafficLight.setState([])).to.throw(
        TypeError,
        "setState: The expected type for state is a number"
      );
    });
    it("should throw a TypeError when attempting to set state to an Object", () => {
      const trafficLight = TrafficLight.create();
      expect(() => trafficLight.setState({})).to.throw(
        TypeError,
        "setState: The expected type for state is a number"
      );
    });
    it("should throw a TypeError when attempting to set state to a '1'", () => {
      const trafficLight = TrafficLight.create();
      expect(() => trafficLight.setState("1")).to.throw(
        TypeError,
        "setState: The expected type for state is a number"
      );
    });
    it("should throw a RangeError when attempting to set state to 5", () => {
      const trafficLight = TrafficLight.create();
      expect(() => trafficLight.setState(5)).to.throw(
        RangeError,
        "setState: the state value must be between 1 and 4"
      );
    });
    it("should throw a RangeError when attempting to set state to 0", () => {
      const trafficLight = TrafficLight.create();
      expect(() => trafficLight.setState(0)).to.throw(
        RangeError,
        "setState: the state value must be between 1 and 4"
      );
    });
  });
  describe("# getState", () => {
    it("should return GREEN", () => {
      const trafficLight = TrafficLight.create();
      trafficLight.setState(TrafficLightState.Green);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Green);
    });
    it("should return YELLOW", () => {
      const trafficLight = TrafficLight.create();
      trafficLight.setState(TrafficLightState.Yellow);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Yellow);
    });
    it("should return RED", () => {
      const trafficLight = TrafficLight.create();
      trafficLight.setState(TrafficLightState.Red);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Red);
    });
    it("should return OFF", () => {
      const trafficLight = TrafficLight.create();
      trafficLight.setState(TrafficLightState.Off);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Off);
    });
  });
  describe("# changeState", () => {
    it("should return YELLOW", () => {
      const trafficLight = TrafficLight.create("Green");
      trafficLight.setState(TrafficLightState.Green);
      trafficLight.nextState();
      expect(trafficLight.getState()).to.equal(TrafficLightState.Yellow);
    });
    it("should return RED", () => {
      const trafficLight = TrafficLight.create("Yellow");
      trafficLight.setState(TrafficLightState.Yellow);
      trafficLight.nextState();
      expect(trafficLight.getState()).to.equal(TrafficLightState.Red);
    });
    it("should return GREEN", () => {
      const trafficLight = TrafficLight.create("Red");
      trafficLight.setState(TrafficLightState.Red);
      trafficLight.nextState();
      expect(trafficLight.getState()).to.equal(TrafficLightState.Green);
    });
    it("should return OFF", () => {
      const trafficLight = TrafficLight.create("Off");
      trafficLight.nextState();
      expect(trafficLight.getState()).to.equal(TrafficLightState.Off);
    });
  });
});
