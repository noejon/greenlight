"use strict";
const expect = require("chai").expect;
const sinon = require("sinon");
const IntersectionHandler = require("../app/intersection-handler");

describe("# Intersection handler", () => {
  beforeEach(() => {
    this.clock = sinon.useFakeTimers();
  });
  afterEach(() => {
    this.clock.restore();
  })
  describe("# setting yellow lights on an initial state after with SinonJs Fake Timer", () => {
    it("should call setLights", () => {
      const intersectionHandler = IntersectionHandler.create();
      const mock = sinon.mock(intersectionHandler);
      mock.expects("setLights").once();
      intersectionHandler.setYellowLights();
      this.clock.tick(IntersectionHandler.GENERAL_TIMER + 10);
      mock.verify();
      mock.restore();
    });
  });
  describe("# setting lights with SinonJs Fake Timer", () => {
    it("should call setYellowLights", () => {
      const intersectionHandler = IntersectionHandler.create();
      const mock = sinon.mock(intersectionHandler);
      mock.expects("setYellowLights").once();
      intersectionHandler.setLights();
      this.clock.tick(IntersectionHandler.YELLOW_TIMER + 10);
      mock.verify();
      mock.restore();
    });
  });
});
