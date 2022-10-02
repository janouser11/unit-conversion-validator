const constants = require("./constants");
const _ = require("lodash");
const Converter = require("node-temperature-converter");
const { KELVIN, CELSIUS, FAHRENHEIT, RANKINE, STATUS } = require("./constants");

exports.isUnitOfMeasurementVolume = (conversions) => {
  // {"initialProblem":{"value":84.2,"unitOfMeasure":"liters"},"studentResponse":{"value":543.94,"unitOfMeasure":"tablespoons"}}

  // determine if we are working in temperatures or volumes
  return _.includes(
    constants.VOLUMES,
    conversions.initialProblem.unitOfMeasure
  );
};

exports.convertFromFahrenheit = (conversions) => {
  const { initialProblem, studentResponse } = conversions;
  const fahrenheitConverter = new Converter.Fahrenheit(
    roundToTenths(initialProblem.value)
  );

  switch (studentResponse.unitOfMeasure) {
    case CELSIUS:
      const celsiusValue = fahrenheitConverter.toCelsius();
      return getStatus(studentResponse.value, celsiusValue);
    case KELVIN:
      const kelvinValue = fahrenheitConverter.toKelvin();
      return getStatus(studentResponse.value, kelvinValue);
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
      const celsiusValue = fahrenheitConverter.toFahrenheit();
      return getStatus(studentResponse.value, celsiusValue);
    case KELVIN:
      const kelvinValue = fahrenheitConverter.toKelvin();
      return getStatus(studentResponse.value, kelvinValue);
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
      const fahrenheitValue = convertRankineToFahrenheit(roundedValue);
      return getStatus(studentResponse.value, fahrenheitValue);
    case KELVIN:
      const kelvinValue = convertRankineToKelvin(roundedValue);
      return getStatus(studentResponse.value, kelvinValue);
    case CELSIUS:
      const celsiusValue = convertRankineToCelsius(roundedValue);
      return getStatus(studentResponse.value, celsiusValue);
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
      const fahrenheitValue = fahrenheitConverter.toFahrenheit();
      return getStatus(studentResponse.value, fahrenheitValue);
    case CELSIUS:
      const celsiusValue = fahrenheitConverter.toCelsius();
      return getStatus(studentResponse.value, celsiusValue);
    case RANKINE:
      const rankineValue = convertKelvinToRankine(
        roundToTenths(initialProblem.value)
      );
      return getStatus(studentResponse.value, rankineValue);
    default:
      throw new Error("Temperature not supported");
  }
};

const getCorrectStatus = () => ({ status: STATUS.CORRECT });
const getIncorrectStatus = (correctValue) => ({
  status: STATUS.INCORRECT,
  correctValue,
});

const getStatus = (studentValue, calculatedValue) =>
  _.isEqual(roundToTenths(studentValue), roundToTenths(calculatedValue))
    ? getCorrectStatus()
    : getIncorrectStatus(calculatedValue);

const roundToTenths = (number) => Math.round(number * 10) / 10;

const convertFahrenheitToRankine = (fahrenheitValue) =>
  fahrenheitValue + 459.67;

const convertCelsiusToRankine = (celsiusValue) =>
  (celsiusValue + 273.15) * (9 / 5);

const convertRankineToFahrenheit = (rankineValue) => rankineValue - 459.67;
const convertRankineToKelvin = (rankineValue) => rankineValue * (5 / 9);
const convertRankineToCelsius = (rankineValue) =>
  (rankineValue - 491.67) * (5 / 9);
const convertKelvinToRankine = (kelvinValue) => kelvinValue * 1.8;
