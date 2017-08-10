"use strict";
const expect = require("chai").expect;
const Intersection = require("../app/intersection");
const TrafficLight = require("../app/traffic-light");
const TrafficLightState = require("../app/traffic-light-state")
  .TrafficLightState;

describe("Testing the Intersection class", () => {
  describe("# create", () => {
    it("should ", () => {});
  });
  describe("# isIntersection", () => {
    it("should", () => {});
  });
  describe("# changeOneTrafficLight", () => {
    it("should change a GREEN traffic light to YELLOW when yellowOnly is true", () => {
      const trafficLight = TrafficLight.create("GREEN");
      trafficLight.setState(TrafficLightState.Green);
      const intersection = Intersection.create();
      intersection.__test_only__.changeOneTrafficLight(trafficLight, true);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Yellow);
    });
    it("should change a GREEN traffic light to YELLOW", () => {
      const trafficLight = TrafficLight.create("GREEN");
      trafficLight.setState(TrafficLightState.Green);
      const intersection = Intersection.create();
      intersection.__test_only__.changeOneTrafficLight(trafficLight);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Yellow);
    });
    it("should change a YELLOW traffic light to RED", () => {
      const trafficLight = TrafficLight.create("YELLOW");
      trafficLight.setState(TrafficLightState.Yellow);
      const intersection = Intersection.create();
      intersection.__test_only__.changeOneTrafficLight(trafficLight);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Red);
    });
    it("should change a RED traffic light to GREEN", () => {
      const trafficLight = TrafficLight.create("RED");
      trafficLight.setState(TrafficLightState.Red);
      const intersection = Intersection.create();
      intersection.__test_only__.changeOneTrafficLight(trafficLight);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Green);
    });
    it("should not change a RED traffic light when yellowOnly is true", () => {
      const trafficLight = TrafficLight.create("RED");
      trafficLight.setState(TrafficLightState.Red);
      const intersection = Intersection.create();
      intersection.__test_only__.changeOneTrafficLight(trafficLight, true);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Red);
    });
    it("should not change a YELLOW traffic light when yellowOnly is true", () => {
      const trafficLight = TrafficLight.create("YELLOW");
      trafficLight.setState(TrafficLightState.Yellow);
      const intersection = Intersection.create();
      intersection.__test_only__.changeOneTrafficLight(trafficLight, true);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Yellow);
    });
    it("should not change an OFF traffic light when yellowOnly is true", () => {
      const trafficLight = TrafficLight.create("OFF");
      const intersection = Intersection.create();
      intersection.__test_only__.changeOneTrafficLight(trafficLight, true);
      expect(trafficLight.getState()).to.equal(TrafficLightState.Off);
    });
  });
  describe("# initIntersectionState", () => {
    it("should set the default state to NORTH:GREEN, SOUTH:GREEN, EAST:RED, WEST:RED", () => {
      const intersection = Intersection.create();
      intersection.initIntersectionState();
      expect(intersection.__test_only__.north.getState()).to.equal(
        TrafficLightState.Green
      );
      expect(intersection.__test_only__.south.getState()).to.equal(
        TrafficLightState.Green
      );
      expect(intersection.__test_only__.east.getState()).to.equal(
        TrafficLightState.Red
      );
      expect(intersection.__test_only__.west.getState()).to.equal(
        TrafficLightState.Red
      );
    });
  });
  describe("# nextIntersectionState (N=NORTH, S=SOUTH, E=EAST, W=WEST, G=GREEN, Y=YELLOW, R=RED, O=OFF)", () => {
    it("should set the lights to N:Y, S:Y, E:R, W:R when yellowOnly and initial state", () => {
      const intersection = Intersection.create();
      intersection.initIntersectionState();
      intersection.nextIntersectionState(true);
      expect(intersection.__test_only__.north.getState()).to.equal(
        TrafficLightState.Yellow
      );
      expect(intersection.__test_only__.south.getState()).to.equal(
        TrafficLightState.Yellow
      );
      expect(intersection.__test_only__.east.getState()).to.equal(
        TrafficLightState.Red
      );
      expect(intersection.__test_only__.west.getState()).to.equal(
        TrafficLightState.Red
      );
    });
    it("should set the lights to N:R, S:R, E:G, W:G after first yellow", () => {
      const intersection = Intersection.create();
      intersection.initIntersectionState();
      intersection.nextIntersectionState(true);
      intersection.nextIntersectionState();
      expect(intersection.__test_only__.north.getState()).to.equal(
        TrafficLightState.Red
      );
      expect(intersection.__test_only__.south.getState()).to.equal(
        TrafficLightState.Red
      );
      expect(intersection.__test_only__.east.getState()).to.equal(
        TrafficLightState.Green
      );
      expect(intersection.__test_only__.west.getState()).to.equal(
        TrafficLightState.Green
      );
    });
    /**
     * Here all the possibilities of an evolution to initial state should be tested,
     * I will omit it to gain some time
     */
  });
});
