const { KELVIN, CELSIUS, FAHRENHEIT, RANKINE } = require("../constants");
const { getStatus } = require("./helpers");
const { convert } = require("convert");

exports.convertFromFahrenheit = (conversions) => {
  const {
    initialProblem: { value: initialProblemValue },
    studentResponse,
  } = conversions;

  switch (studentResponse.unitOfMeasure) {
    case CELSIUS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, FAHRENHEIT).to(CELSIUS)
      );
    case KELVIN:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, FAHRENHEIT).to(KELVIN)
      );
    case RANKINE:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, FAHRENHEIT).to(RANKINE)
      );
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromCelsius = (conversions) => {
  const {
    initialProblem: { value: initialProblemValue },
    studentResponse,
  } = conversions;

  switch (studentResponse.unitOfMeasure) {
    case FAHRENHEIT:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CELSIUS).to(FAHRENHEIT)
      );
    case KELVIN:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CELSIUS).to(KELVIN)
      );
    case RANKINE:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, CELSIUS).to(RANKINE)
      );
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromRankine = (conversions) => {
  const {
    initialProblem: { value: initialProblemValue },
    studentResponse,
  } = conversions;
  switch (studentResponse.unitOfMeasure) {
    case FAHRENHEIT:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, RANKINE).to(FAHRENHEIT)
      );
    case KELVIN:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, RANKINE).to(KELVIN)
      );
    case CELSIUS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, RANKINE).to(CELSIUS)
      );
    default:
      throw new Error("Temperature not supported");
  }
};

exports.convertFromKelvin = (conversions) => {
  const {
    initialProblem: { value: initialProblemValue },
    studentResponse,
  } = conversions;
  switch (studentResponse.unitOfMeasure) {
    case FAHRENHEIT:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, KELVIN).to(FAHRENHEIT)
      );
    case CELSIUS:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, KELVIN).to(CELSIUS)
      );
    case RANKINE:
      return getStatus(
        studentResponse.value,
        convert(initialProblemValue, KELVIN).to(RANKINE)
      );
    default:
      throw new Error("Temperature not supported");
  }
};
