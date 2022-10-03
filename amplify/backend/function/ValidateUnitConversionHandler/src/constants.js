// temperatures
const KELVIN = "kelvin";
const CELSIUS = "celsius";
const FAHRENHEIT = "fahrenheit";
const RANKINE = "rankine";

// volumes
const LITERS = "liters";
const TABLESPOONS = "tablespoons";
const CUBIC_INCHES = "cubic inches";
const CUPS = "cups";
const CUBIC_FEET = "cubic feet";
const GALLONS = "gallons";

const STATUS = {
  CORRECT: "correct",
  INCORRECT: "incorrect",
  INVALID: "invalid",
};

module.exports = Object.freeze({
  TEMPERATURES: [KELVIN, CELSIUS, FAHRENHEIT, RANKINE],
  VOLUMES: [LITERS, TABLESPOONS, CUBIC_INCHES, CUPS, CUBIC_FEET, GALLONS],
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
  STATUS,
});
