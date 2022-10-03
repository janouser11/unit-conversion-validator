const { STATUS } = require("../constants");

exports.getCorrectResponseBody = () =>
  JSON.stringify({ status: STATUS.CORRECT });

exports.getIncorrectResponseBody = (correctValue) =>
  JSON.stringify({ status: STATUS.INCORRECT, correctValue });

exports.getValidationErrorResponseBody = (message) =>
  JSON.stringify({
    status: "invalid",
    message,
  });

exports.getEventWithNoInitialProblem = () => ({
  studentResponse: {
    value: 1,
    unitOfMeasure: "celsius",
  },
});

exports.getEventWithNoStudentResponse = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "fahrenheit",
  },
});

exports.getInvalidUnitOfMeasureEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "dog",
  },
  studentResponse: {
    value: 0,
    unitOfMeasure: "celsius",
  },
});

exports.getExampleScenario1 = () => ({
  initialProblem: {
    value: 84.2,
    unitOfMeasure: "fahrenheit",
  },
  studentResponse: {
    value: 543.94,
    unitOfMeasure: "rankine",
  },
});

exports.getExampleScenario2 = () => ({
  initialProblem: {
    value: 317.33,
    unitOfMeasure: "kelvin",
  },
  studentResponse: {
    value: 111.554,
    unitOfMeasure: "fahrenheit",
  },
});

exports.getExampleScenario3 = () => ({
  initialProblem: {
    value: 25.6,
    unitOfMeasure: "cups",
  },
  studentResponse: {
    value: 6.1,
    unitOfMeasure: "liters",
  },
});

exports.getExampleScenario4 = () => ({
  initialProblem: {
    value: 73.12,
    unitOfMeasure: "gallons",
  },
  studentResponse: {
    value: 19.4,
    unitOfMeasure: "kelvin",
  },
});

// I think this scenario should return invalid instead of incorrect since
// it would be caught by validation and not be able to be proccessed
exports.getExampleScenario5 = () => ({
  initialProblem: {
    value: 6.5,
    unitOfMeasure: "fahrenheit",
  },
  studentResponse: {
    value: "dog",
    unitOfMeasure: "rankine",
  },
});

exports.getExampleScenario6 = () => ({
  initialProblem: {
    value: 136.1,
    unitOfMeasure: "dog",
  },
  studentResponse: {
    value: 45.32,
    unitOfMeasure: "celsius",
  },
});

exports.wrapEventWithBody = (event) => ({ body: JSON.stringify(event) });
