const { KELVIN, CELSIUS, FAHRENHEIT, RANKINE } = require("./constants");
const { isUnitOfMeasurementVolume } = require("./helpers");
const {
  convertFromFahrenheit,
  convertFromCelsius,
  convertFromRankine,
  convertFromKelvin,
} = require("./temperature-helpers");

exports.calculateConversions = async (conversions) => {
  // determine if we are working in temperatures or volumes
  const isVolume = isUnitOfMeasurementVolume(conversions);
  if (isVolume) {
    return validateVolumeConversion(conversions);
  } else {
    // its temperature type
    return validateTemperatureConversion(conversions);
  }
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
};

const validateVolumeConversion = (conversions) => {
  return true;
};
