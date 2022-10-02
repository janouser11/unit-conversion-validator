const constants = require("./constants");
const _ = require("lodash");
const Converter = require("node-temperature-converter");
const { KELVIN, CELSIUS, FAHRENHEIT, RANKINE, STATUS } = require("./constants");
const { getStatus, roundToTenths } = require("./helpers");

exports.convertFromFahrenheit = (conversions) => {
  const { initialProblem, studentResponse } = conversions;
  const fahrenheitConverter = new Converter.Fahrenheit(
    roundToTenths(initialProblem.value)
  );

  switch (studentResponse.unitOfMeasure) {
    case CELSIUS:
      return getStatus(studentResponse.value, fahrenheitConverter.toCelsius());
    case KELVIN:
      return getStatus(studentResponse.value, fahrenheitConverter.toKelvin());
    case RANKINE:
      const rankineValue = convertFahrenheitToRankine(
        roundToTenths(initialProblem.value)
      );
      return getStatus(studentResponse.value, rankineValue);
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromCelsius = (conversions) => {
  const { initialProblem, studentResponse } = conversions;
  const fahrenheitConverter = new Converter.Celsius(
    roundToTenths(initialProblem.value)
  );

  switch (studentResponse.unitOfMeasure) {
    case FAHRENHEIT:
      return getStatus(
        studentResponse.value,
        fahrenheitConverter.toFahrenheit()
      );
    case KELVIN:
      return getStatus(studentResponse.value, fahrenheitConverter.toKelvin());
    case RANKINE:
      const rankineValue = convertCelsiusToRankine(
        roundToTenths(initialProblem.value)
      );
      return getStatus(studentResponse.value, rankineValue);
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromRankine = (conversions) => {
  const { initialProblem, studentResponse } = conversions;
  const roundedValue = roundToTenths(initialProblem.value);
  switch (studentResponse.unitOfMeasure) {
    case FAHRENHEIT:
      return getStatus(
        studentResponse.value,
        convertRankineToFahrenheit(roundedValue)
      );
    case KELVIN:
      return getStatus(
        studentResponse.value,
        convertRankineToKelvin(roundedValue)
      );
    case CELSIUS:
      return getStatus(
        studentResponse.value,
        convertRankineToCelsius(roundedValue)
      );
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromKelvin = (conversions) => {
  const { initialProblem, studentResponse } = conversions;
  const fahrenheitConverter = new Converter.Kelvin(
    roundToTenths(initialProblem.value)
  );

  switch (studentResponse.unitOfMeasure) {
    case FAHRENHEIT:
      return getStatus(
        studentResponse.value,
        fahrenheitConverter.toFahrenheit()
      );
    case CELSIUS:
      return getStatus(studentResponse.value, fahrenheitConverter.toCelsius());
    case RANKINE:
      const rankineValue = convertKelvinToRankine(
        roundToTenths(initialProblem.value)
      );
      return getStatus(studentResponse.value, rankineValue);
    default:
      throw new Error("Temperature not supported");
  }
};

const convertFahrenheitToRankine = (fahrenheitValue) =>
  fahrenheitValue + 459.67;
const convertCelsiusToRankine = (celsiusValue) =>
  (celsiusValue + 273.15) * (9 / 5);
const convertRankineToFahrenheit = (rankineValue) => rankineValue - 459.67;
const convertRankineToKelvin = (rankineValue) => rankineValue * (5 / 9);
const convertRankineToCelsius = (rankineValue) =>
  (rankineValue - 491.67) * (5 / 9);
const convertKelvinToRankine = (kelvinValue) => kelvinValue * 1.8;
