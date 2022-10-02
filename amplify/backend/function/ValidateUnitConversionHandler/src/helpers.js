const constants = require("./constants");
const _ = require("lodash");
const { STATUS } = require("./constants");

exports.isUnitOfMeasurementVolume = (conversions) => {
  // determine if we are working in temperatures or volumes
  return _.includes(
    constants.VOLUMES,
    conversions.initialProblem.unitOfMeasure
  );
};

exports.getStatus = (studentValue, calculatedValue) =>
  _.isEqual(
    this.roundToTenths(studentValue),
    this.roundToTenths(calculatedValue)
  )
    ? getCorrectStatus()
    : getIncorrectStatus(calculatedValue);

exports.roundToTenths = (number) => Math.round(number * 10) / 10;

const getCorrectStatus = () => ({ status: STATUS.CORRECT });
const getIncorrectStatus = (correctValue) => ({
  status: STATUS.INCORRECT,
  correctValue,
});
