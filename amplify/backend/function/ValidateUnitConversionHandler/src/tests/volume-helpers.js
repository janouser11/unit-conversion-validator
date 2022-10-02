const { STATUS } = require("../constants");

exports.getCorrectResponseBody = () =>
  JSON.stringify({ status: STATUS.CORRECT });

exports.getIncorrectResponseBody = (correctValue) =>
  JSON.stringify({ status: STATUS.INCORRECT, correctValue });

exports.getCorrectLiterToTablespoonEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "liters",
  },
  studentResponse: {
    value: 3449.03,
    unitOfMeasure: "tablespoons",
  },
});

exports.getCorrectLiterToCubicInchesEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "liters",
  },
  studentResponse: {
    value: 3112.21,
    unitOfMeasure: "cubic inches",
  },
});

exports.getCorrectLiterToCupsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "liters",
  },
  studentResponse: {
    value: 215.564,
    unitOfMeasure: "cups",
  },
});

exports.getCorrectLiterToCubicFeetEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "liters",
  },
  studentResponse: {
    value: 1.80105,
    unitOfMeasure: "cubic feet",
  },
});

exports.getCorrectLiterToGallonsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "liters",
  },
  studentResponse: {
    value: 13.4728,
    unitOfMeasure: "gallons",
  },
});

exports.getCorrectTablespoonToLitersEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "tablespoons",
  },
  studentResponse: {
    value: 0.754125,
    unitOfMeasure: "liters",
  },
});

exports.getCorrectTablespoonToCubicInchesEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "tablespoons",
  },
  studentResponse: {
    value: 46.0195,
    unitOfMeasure: "cubic inches",
  },
});

exports.getCorrectTablespoonToCupsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "tablespoons",
  },
  studentResponse: {
    value: 3.1875,
    unitOfMeasure: "cups",
  },
});

exports.getCorrectTablespoonToCubicFeetEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "tablespoons",
  },
  studentResponse: {
    value: 0.0266317,
    unitOfMeasure: "cubic feet",
  },
});

exports.getCorrectTablespoonToGallonsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "tablespoons",
  },
  studentResponse: {
    value: 0.199219,
    unitOfMeasure: "gallons",
  },
});

exports.getCorrectCubicInchesToLitersEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cubic inches",
  },
  studentResponse: {
    value: 0.83574,
    unitOfMeasure: "liters",
  },
});

exports.getCorrectCubicInchesToTablespoonsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cubic inches",
  },
  studentResponse: {
    value: 56.5195,
    unitOfMeasure: "tablespoons",
  },
});

exports.getCorrectCubicInchesToCupsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cubic inches",
  },
  studentResponse: {
    value: 3.53247,
    unitOfMeasure: "cups",
  },
});

exports.getCorrectCubicInchesToCubicFeetEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cubic inches",
  },
  studentResponse: {
    value: 0.0295139,
    unitOfMeasure: "cubic feet",
  },
});

exports.getCorrectCubicInchesToGallonsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cubic inches",
  },
  studentResponse: {
    value: 0.220779,
    unitOfMeasure: "gallons",
  },
});

exports.getCorrectCupsToLitersEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cups",
  },
  studentResponse: {
    value: 12.066,
    unitOfMeasure: "liters",
  },
});

exports.getCorrectCupsToTablespoonsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cups",
  },
  studentResponse: {
    value: 816,
    unitOfMeasure: "tablespoons",
  },
});

exports.getCorrectCupsToCubicInchesEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cups",
  },
  studentResponse: {
    value: 736.312,
    unitOfMeasure: "cubic inches",
  },
});

exports.getCorrectCupsToCubicFeetEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cups",
  },
  studentResponse: {
    value: 0.426107,
    unitOfMeasure: "cubic feet",
  },
});

exports.getCorrectCupsToGallonsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cups",
  },
  studentResponse: {
    value: 3.1875,
    unitOfMeasure: "gallons",
  },
});

exports.getCorrectCubicFeetToLitersEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cubic feet",
  },
  studentResponse: {
    value: 1444.16,
    unitOfMeasure: "liters",
  },
});

exports.getCorrectCubicFeetToTablespoonsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cubic feet",
  },
  studentResponse: {
    value: 97665,
    unitOfMeasure: "tablespoons",
  },
});

exports.getCorrectCubicFeetToCubicInchesEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cubic feet",
  },
  studentResponse: {
    value: 88128,
    unitOfMeasure: "cubic inches",
  },
});

exports.getCorrectCubicFeetToCupEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cubic feet",
  },
  studentResponse: {
    value: 6104.7,
    unitOfMeasure: "cups",
  },
});

exports.getCorrectCubicFeetToGallonsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "cubic feet",
  },
  studentResponse: {
    value: 381.506,
    unitOfMeasure: "gallons",
  },
});

exports.getCorrectGallonsToLitersEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "gallons",
  },
  studentResponse: {
    value: 231.8,
    unitOfMeasure: "liters",
  },
});

exports.getCorrectGallonsToTablespoonsEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "gallons",
  },
  studentResponse: {
    value: 15677.4,
    unitOfMeasure: "tablespoons",
  },
});

exports.getCorrectGallonsToCubicInchesEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "gallons",
  },
  studentResponse: {
    value: 14147.4,
    unitOfMeasure: "cubic inches",
  },
});

exports.getCorrectGallonsToCupEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "gallons",
  },
  studentResponse: {
    value: 816,
    unitOfMeasure: "cups",
  },
});

exports.getCorrectGallonsToCubicFeetEvent = () => ({
  initialProblem: {
    value: 51,
    unitOfMeasure: "gallons",
  },
  studentResponse: {
    value: 8.18773,
    unitOfMeasure: "cubic feet",
  },
});
