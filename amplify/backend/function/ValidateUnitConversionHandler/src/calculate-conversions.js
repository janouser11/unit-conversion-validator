const {
  KELVIN,
  CELSIUS,
  FAHRENHEIT,
  RANKINE,
  LITERS,
  TABLESPOONS,
  CUBIC_INCHES,
  CUPS,
  CUBIC_FEET,
  GALLONS,
} = require("./constants");
const { isUnitOfMeasurementVolume } = require("./helpers/helpers");
const {
  convertFromFahrenheit,
  convertFromCelsius,
  convertFromRankine,
  convertFromKelvin,
} = require("./helpers/temperature-helpers");
const { convertFromLiters } = require("./helpers/volume-helpers");

exports.calculateConversions = async (conversions) => {
  // determine if we are working in temperatures or volumes
  const isVolume = isUnitOfMeasurementVolume(conversions);
  return isVolume
    ? validateVolumeConversion(conversions)
    : validateTemperatureConversion(conversions);
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
  }
};

const validateVolumeConversion = (conversions) => {
  const { initialProblem } = conversions;
  switch (initialProblem.unitOfMeasure) {
    case LITERS:
      return convertFromLiters(conversions);
    case TABLESPOONS:
      return;
    case CUBIC_INCHES:
      return;
    case CUPS:
      return;
    case CUBIC_FEET:
      return;
    case GALLONS:
      return;
    default:
      throw new Error("Temperature not supported");
  }
};
