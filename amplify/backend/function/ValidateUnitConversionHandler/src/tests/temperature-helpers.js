const { STATUS } = require("../constants");

exports.getCorrectResponseBody = () =>
  JSON.stringify({ status: STATUS.CORRECT });

exports.getIncorrectResponseBody = (correctValue) =>
  JSON.stringify({ status: STATUS.INCORRECT, correctValue });

exports.getCorrectFahrenheitToCelsiusEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "fahrenheit",
  },
  studentResponse: {
    value: 0,
    unitOfMeasure: "celsius",
  },
});

exports.getIncorrectFahrenheitToCelsiusEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "fahrenheit",
  },
  studentResponse: {
    value: 1,
    unitOfMeasure: "celsius",
  },
});

exports.getCorrectFahrenheitToKelvinEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "fahrenheit",
  },
  studentResponse: {
    value: 273.15,
    unitOfMeasure: "kelvin",
  },
});

exports.getCorrectFahrenheitToRankineEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "fahrenheit",
  },
  studentResponse: {
    value: 491.67,
    unitOfMeasure: "rankine",
  },
});

exports.getCorrectCelsiusToKelvinEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "celsius",
  },
  studentResponse: {
    value: 305.15,
    unitOfMeasure: "kelvin",
  },
});

exports.getCorrectCelsiusToFahrenheitEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "celsius",
  },
  studentResponse: {
    value: 89.6,
    unitOfMeasure: "fahrenheit",
  },
});

exports.getCorrectCelsiusToRankineEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "celsius",
  },
  studentResponse: {
    value: 549.27,
    unitOfMeasure: "rankine",
  },
});

exports.getCorrectRankineToKelvinEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "rankine",
  },
  studentResponse: {
    value: 17.7778,
    unitOfMeasure: "kelvin",
  },
});

exports.getCorrectRankineToCelsiusEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "rankine",
  },
  studentResponse: {
    value: -255.372,
    unitOfMeasure: "celsius",
  },
});

exports.getCorrectRankineToFahrenheitEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "rankine",
  },
  studentResponse: {
    value: -427.67,
    unitOfMeasure: "fahrenheit",
  },
});

exports.getCorrectKelvinToRankineEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "kelvin",
  },
  studentResponse: {
    value: 57.6,
    unitOfMeasure: "rankine",
  },
});

exports.getCorrectKelvinToCelsiusEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "kelvin",
  },
  studentResponse: {
    value: -241.15,
    unitOfMeasure: "celsius",
  },
});

exports.getCorrectKelvinToFahrenheitEvent = () => ({
  initialProblem: {
    value: 32,
    unitOfMeasure: "kelvin",
  },
  studentResponse: {
    value: -402.07,
    unitOfMeasure: "fahrenheit",
  },
});
