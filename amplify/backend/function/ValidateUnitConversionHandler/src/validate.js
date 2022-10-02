const _ = require("lodash");
const constants = require("./constants");

// verify payload looks similiar to what we would expect
exports.validate = async (conversions) => {
  if (!conversions) return "No conversions found";
  if (!conversions.initialProblem) return "No initial problem found";
  if (!conversions.studentResponse) return "No student response found";
  if (!_.isNumber(conversions.initialProblem.value))
    return "Value must be numerical";
  if (!_.isNumber(conversions.studentResponse.value))
    return "Value must be numerical";
  if (!_.isString(conversions.initialProblem.unitOfMeasure))
    return "Value must be a string";
  if (!_.isString(conversions.studentResponse.unitOfMeasure))
    return "Value must be a string";

  // verify unit of measure is supported
  if (
    !_.includes(
      constants.TEMPERATURES,
      conversions.initialProblem.unitOfMeasure
    ) &&
    !_.includes(constants.VOLUMES, conversions.initialProblem.unitOfMeasure)
  )
    return `Invalid unit of measure provided for initial problem: ${conversions.initialProblem.unitOfMeasure}`;

  if (
    !_.includes(
      constants.TEMPERATURES,
      conversions.studentResponse.unitOfMeasure
    ) &&
    !_.includes(constants.VOLUMES, conversions.studentResponse.unitOfMeasure)
  )
    return `Invalid unit of measure provided for initial problem: ${conversions.studentResponse.unitOfMeasure}`;

  //verify that both units of measure are either temperatures or volumes
  if (
    _.includes(
      constants.TEMPERATURES,
      conversions.initialProblem.unitOfMeasure
    ) &&
    _.includes(constants.VOLUMES, conversions.studentResponse.unitOfMeasure)
  )
    return `Units of measure must be the same type`;

  if (
    _.includes(
      constants.TEMPERATURES,
      conversions.studentResponse.unitOfMeasure
    ) &&
    _.includes(constants.VOLUMES, conversions.initialProblem.unitOfMeasure)
  )
    return `Units of measure must be the same type`;

  if (
    _.isEqual(
      conversions.initialProblem.unitOfMeasure,
      conversions.studentResponse.unitOfMeasure
    )
  )
    return `Units of measure cannot be the same`;
  return null;
};
