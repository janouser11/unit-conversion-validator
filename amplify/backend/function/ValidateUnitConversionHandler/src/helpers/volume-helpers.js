const {
  TABLESPOONS,
  CUBIC_INCHES,
  CUPS,
  CUBIC_FEET,
  GALLONS,
  LITERS,
} = require("../constants");
const { getStatus } = require("./helpers");
const { convert } = require("convert");

exports.convertFromLiters = (conversions) => {
  const {
    initialProblem: { value: initialProblemValue },
    studentResponse,
  } = conversions;

  switch (studentResponse.unitOfMeasure) {
    case TABLESPOONS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, LITERS).to(TABLESPOONS)
      );
    case CUBIC_INCHES:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, LITERS).to(CUBIC_INCHES)
      );
    case CUPS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, LITERS).to(CUPS)
      );
    case CUBIC_FEET:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, LITERS).to(CUBIC_FEET)
      );
    case GALLONS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, LITERS).to(GALLONS)
      );
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromTablespoons = (conversions) => {
  const {
    initialProblem: { value: initialProblemValue },
    studentResponse,
  } = conversions;

  switch (studentResponse.unitOfMeasure) {
    case LITERS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, TABLESPOONS).to(LITERS)
      );
    case CUBIC_INCHES:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, TABLESPOONS).to(CUBIC_INCHES)
      );
    case CUPS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, TABLESPOONS).to(CUPS)
      );
    case CUBIC_FEET:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, TABLESPOONS).to(CUBIC_FEET)
      );
    case GALLONS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, TABLESPOONS).to(GALLONS)
      );
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromCubicInches = (conversions) => {
  const {
    initialProblem: { value: initialProblemValue },
    studentResponse,
  } = conversions;

  switch (studentResponse.unitOfMeasure) {
    case LITERS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CUBIC_INCHES).to(LITERS)
      );
    case TABLESPOONS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CUBIC_INCHES).to(TABLESPOONS)
      );
    case CUPS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CUBIC_INCHES).to(CUPS)
      );
    case CUBIC_FEET:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CUBIC_INCHES).to(CUBIC_FEET)
      );
    case GALLONS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CUBIC_INCHES).to(GALLONS)
      );
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromCups = (conversions) => {
  const {
    initialProblem: { value: initialProblemValue },
    studentResponse,
  } = conversions;

  switch (studentResponse.unitOfMeasure) {
    case LITERS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CUPS).to(LITERS)
      );
    case TABLESPOONS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CUPS).to(TABLESPOONS)
      );
    case CUBIC_INCHES:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CUPS).to(CUBIC_INCHES)
      );
    case CUBIC_FEET:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CUPS).to(CUBIC_FEET)
      );
    case GALLONS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CUPS).to(GALLONS)
      );
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromCubicFeet = (conversions) => {
  const {
    initialProblem: { value: initialProblemValue },
    studentResponse,
  } = conversions;

  switch (studentResponse.unitOfMeasure) {
    case LITERS:
      return getStatus(
        studentResponse.value,
        convertCubicFeetToLiters(initialProblemValue)
      );
    case TABLESPOONS:
      return getStatus(
        studentResponse.value,
        convertCubicFeetToTablespoons(initialProblemValue)
      );
    case CUBIC_INCHES:
      return getStatus(
        studentResponse.value,
        convertCubicFeetToCubicInches(initialProblemValue)
      );
    case CUPS:
      return getStatus(
        studentResponse.value,
        convertCubicFeetToCups(initialProblemValue)
      );
    case GALLONS:
      return getStatus(
        studentResponse.value,
        convertCubicFeetToGallons(initialProblemValue)
      );
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromGallons = (conversions) => {
  const {
    initialProblem: { value: initialProblemValue },
    studentResponse,
  } = conversions;

  switch (studentResponse.unitOfMeasure) {
    case LITERS:
      return getStatus(
        studentResponse.value,
        convertGallonsToLiters(initialProblemValue)
      );
    case TABLESPOONS:
      return getStatus(
        studentResponse.value,
        convertGallonsToTablespoons(initialProblemValue)
      );
    case CUBIC_INCHES:
      return getStatus(
        studentResponse.value,
        convertGallonsToCubicInches(initialProblemValue)
      );
    case CUBIC_FEET:
      return getStatus(
        studentResponse.value,
        convertGallonsToCubicFeet(initialProblemValue)
      );
    case CUPS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, GALLONS).to(CUPS)
      );
    default:
      throw new Error("Temperature not supported");
  }
};

// approximate results
const convertCubicFeetToLiters = (value) => value * 28.317;
// approximate results
const convertCubicFeetToTablespoons = (value) => value * 1915;
const convertCubicFeetToCubicInches = (value) => value * 1728;
// approximate results
const convertCubicFeetToCups = (value) => value * 119.7;
// approximate results
const convertCubicFeetToGallons = (value) => value * 7.48;
// approximate results
const convertGallonsToCubicFeet = (value) => value / 6.229;
// approximate results
const convertGallonsToCubicInches = (value) => value * 277.4;
// approximate results
const convertGallonsToTablespoons = (value) => value * 307.4;
const convertGallonsToLiters = (value) => value * 4.546;
