const { KELVIN, CELSIUS, FAHRENHEIT, RANKINE } = require("./constants");
const {
  isUnitOfMeasurementVolume,
  convertFromFahrenheit,
  convertFromCelsius,
  convertFromRankine,
  convertFromKelvin,
} = require("./helpers");
const Converter = require("node-temperature-converter");
const _ = require("lodash");

// verify payload looks similiar to what we would expect
exports.calculateConversions = async (conversions) => {
  // {"initialProblem":{"value":84.2,"unitOfMeasure":"liters"},"studentResponse":{"value":543.94,"unitOfMeasure":"tablespoons"}}
  // determine if we are working in temperatures or volumes
  const isVolume = isUnitOfMeasurementVolume(conversions);
  if (isVolume) {
    return validateVolumeConversion(conversions);
  } else {
    // its temperature type
    return validateTemperatureConversion(conversions);
  }
};

const validateVolumeConversion = (conversions) => {
  return true;
};

const validateTemperatureConversion = (conversions) => {
  const { initialProblem } = conversions;
  switch (initialProblem.unitOfMeasure) {
    case FAHRENHEIT:
      return convertFromFahrenheit(conversions);
    case CELSIUS:
      return convertFromCelsius(conversions);
    case KELVIN:
      return convertFromKelvin(conversions);
    case RANKINE:
      return convertFromRankine(conversions);
    default:
      throw new Error("Temperature not supported");
  }
  throw new Error("Something went wrong");
};

// {
//   status: 'correct',
//   message: ''
// }
// {
//   status: 'invalid',
//   message: '',
//   correctValue: 25.25
// }
