# Traffic light management

## Introduction

You are required to provide the code for an application that simulates a set of traffic lights at an intersection.
The traffic lights are designated (N,S) and (E,W) like a compass.

## Requirements

* When switching from green to red, the yellow light must be displayed for 30 seconds prior to it switching to red. The lights will change automatically every 5 minutes.
* You are not required to optimize the solution, just focus on a functional approach to the requirements.
* Provide the output for the light changes which occur during a given thirty minute period.
* You must provide unit tests for all logic.
* Create a repo on bitbucket/github and provide a link as well as instructions on how to run.

## Analysis

### Facts

* One full cycle of traffic light change is as follow:
    - Green => Yellow => Red => Green
* Green  -> Yellow: 270 seconds
* Red    -> Green : 300 seconds
* Yellow -> Red   : 30 seconds
* N and S are switched to the same color at the same time
* E and W are switched to the same color at the same time
* N, S, E and W are traffic lights
* N, S, E and W are part of an intersection
* Green, Yellow, Red and Off are traffic light states.

### Assumptions

* There are no turning bays
* No crosswalk
* There is no delay between (N,S) and (E,W) state change.
* The light does not turn yellow when changing from red to green.

## Implementation

- Green, Yellow, Red and Off are traffic light states, thus a [TrafficLightState](app/traffic-light-state.js) enumeration has been created:
    * Green  : 1
    * Yellow : 2
    * Red    : 3
    * Off    : 4

- N, S, E and W are traffic lights, thus a [TrafficLight](app/traffic-light.js) class has been created.
    TrafficLight just takes care of the traffic light state.
    It allows setting and getting the traffic light.
    It also allows to set the next state in the cycle and tell the .
    The default state of a traffic light is Off

- N, S, E and W are part of an intersection, thus an [Intersection](app/intersection.js) class has been created.
    Intersection takes care of switching the 4 traffic lights simultaneously.
    I allows to initialize the traffic lights.
    I allows to set the 4 traffic lights to their next state in the cycle.

- In order to run the intersection timely, an intersection handler has been created.
    It takes care of setting the timeouts to change the lights on time.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purpose.

### Prerequisites

You will need to install node.
Please install it from your favourite package manager of from the [official website](https://nodejs.org/en/).

### Installing

If you have [git](https://git-scm.com/) installed you can use the following:

In a command line
```
$git clone https://github.com/noejon/greenlight
$cd greenlight
```

Alternatively you can download the repository via direct download or via your preferred git desktop application.

You will now need a command line or terminal:

1. Open a terminal or command prompt at the location of your project

```
$cd path/to/my/project
```

2. Run npm install to install all the required dependencies

```
$npm install
```
You are all set time to run some unit tests

## Running the tests

1. To run the unit tests, execute the following command

```
$./node_modules/mocha/bin/mocha test
```

2. Alternatively, if you have mocha installed globally, you can run
```
$mocha test
```

## Running the console app

Run following command

```
$node ./index.js
```

## Unit tests

Unit tests are using the npm packages mocha, chai and sinon to run the tests.
To be able to unit test the private methods, I created a __test_only__ object to test them.
The tests are testing for input types and ranges and if the functions' logic have the expected behavior.
By lack of time, the set of unit tests is not complete, the intersection-handler should be tested further, to test that the states have been changed properly. Intersection would also need a mock test.

## Further improvments

* After a long time running, the time might not be that accurate anymore, and the lights might run late compared to the schedule. Their status update will remain synchronized.
* At the moment the intersection is not very flexible, as the 4 traffic lights are attributes to the intersection. There could be more traffic lights or less. A better implementation for the Intersection would be to store the lights in an Array.

## Results

You can find results for the first 30 minutes in [result](result.txt).

Otherwise here is a raw output of the results:
[00:53:32] [LOG]   

        The lights are initialized as follow:
        - N: Green
        - S: Green
        - E: Red
        - W: Red

[00:58:02] [LOG]   N: Green ==> Yellow
[00:58:02] [LOG]   S: Green ==> Yellow

[00:58:32] [LOG]   N: Yellow ==> Red
[00:58:32] [LOG]   S: Yellow ==> Red
[00:58:32] [LOG]   E: Red ==> Green
[00:58:32] [LOG]   W: Red ==> Green

[01:03:02] [LOG]   E: Green ==> Yellow
[01:03:02] [LOG]   W: Green ==> Yellow

[01:03:32] [LOG]   N: Red ==> Green
[01:03:32] [LOG]   S: Red ==> Green
[01:03:32] [LOG]   E: Yellow ==> Red
[01:03:32] [LOG]   W: Yellow ==> Red

[01:08:02] [LOG]   N: Green ==> Yellow
[01:08:02] [LOG]   S: Green ==> Yellow

[01:08:32] [LOG]   N: Yellow ==> Red
[01:08:32] [LOG]   S: Yellow ==> Red
[01:08:32] [LOG]   E: Red ==> Green
[01:08:32] [LOG]   W: Red ==> Green

[01:13:02] [LOG]   E: Green ==> Yellow
[01:13:02] [LOG]   W: Green ==> Yellow

[01:13:32] [LOG]   N: Red ==> Green
[01:13:32] [LOG]   S: Red ==> Green
[01:13:32] [LOG]   E: Yellow ==> Red
[01:13:32] [LOG]   W: Yellow ==> Red

[01:18:02] [LOG]   N: Green ==> Yellow
[01:18:02] [LOG]   S: Green ==> Yellow

[01:18:32] [LOG]   N: Yellow ==> Red
[01:18:32] [LOG]   S: Yellow ==> Red
[01:18:32] [LOG]   E: Red ==> Green
[01:18:32] [LOG]   W: Red ==> Green

[01:23:02] [LOG]   E: Green ==> Yellow
[01:23:02] [LOG]   W: Green ==> Yellow

[01:23:32] [LOG]   N: Red ==> Green
[01:23:32] [LOG]   S: Red ==> Green
[01:23:32] [LOG]   E: Yellow ==> Red
[01:23:32] [LOG]   W: Yellow ==> Red

[01:28:02] [LOG]   N: Green ==> Yellow
[01:28:02] [LOG]   S: Green ==> Yellow

[01:28:32] [LOG]   N: Yellow ==> Red
[01:28:32] [LOG]   S: Yellow ==> Red
[01:28:32] [LOG]   E: Red ==> Green
[01:28:32] [LOG]   W: Red ==> Green

## Authors

* **Jonathan Noe** - Software engineer for more than 6 years.
