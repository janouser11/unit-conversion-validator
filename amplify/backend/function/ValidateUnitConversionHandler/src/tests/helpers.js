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
