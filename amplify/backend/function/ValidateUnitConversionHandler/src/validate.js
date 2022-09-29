const _ = require("lodash");
const constants = require("./constants");

exports.validate = (conversions) => {
  //{
  //   "initialProblem": {
  //     "value": 84.2,
  //     "unitOfMeasure": "fahrenheit"
  //   },
  //   "studentResponse": {
  //     "value": 543.94,
  //     "unitOfMeasure": "rankine"
  //   }
  // }

  validatePayload(conversions);

  return conversions;
};

// verify payload looks similiar to what we would expect
const validatePayload = (conversions) => {
  if (!conversions) throw new Error("No conversions found");
  if (!conversions.initialProblem) throw new Error("No initial problem found");
  if (!conversions.studentResponse)
    throw new Error("No student response found");
  if (!_.isNumber(conversions.initialProblem.value))
    throw new Error("Value must be numerical");
  if (!_.isNumber(conversions.studentResponse.value))
    throw new Error("Value must be numerical");
  if (!_.isString(conversions.initialProblem.unitOfMeasure))
    throw new Error("Value must be a string");
  if (!_.isString(conversions.studentResponse.unitOfMeasure))
    throw new Error("Value must be a string");
  console.log(constants.TEMPERATURES);
  // verify unit of measure is supported
  if (
    !_.includes(
      constants.TEMPERATURES,
      conversions.initialProblem.unitOfMeasure
    ) &&
    !_.includes(constants.VOLUMES, conversions.initialProblem.unitOfMeasure)
  )
    throw new Error(
      `Invalid unit of measure provided for initial problem: ${conversions.initialProblem.unitOfMeasure}`
    );

  if (
    !_.includes(
      constants.TEMPERATURES,
      conversions.studentResponse.unitOfMeasure
    ) &&
    !_.includes(constants.VOLUMES, conversions.studentResponse.unitOfMeasure)
  )
    throw new Error(
      `Invalid unit of measure provided for initial problem: ${conversions.studentResponse.unitOfMeasure}`
    );

  //verify that both units of measure are either temperatures or volumes
  if (
    _.includes(
      constants.TEMPERATURES,
      conversions.initialProblem.unitOfMeasure
    ) &&
    _.includes(constants.VOLUMES, conversions.studentResponse.unitOfMeasure)
  )
    throw new Error(`Units of measure must be the same type`);

  if (
    _.includes(
      constants.TEMPERATURES,
      conversions.studentResponse.unitOfMeasure
    ) &&
    _.includes(constants.VOLUMES, conversions.initialProblem.unitOfMeasure)
  )
    throw new Error(`Units of measure must be the same type`);

  if (
    _.isEqual(
      conversions.initialProblem.unitOfMeasure,
      conversions.studentResponse.unitOfMeasure
    )
  )
    throw new Error(`Units of measure cannot be the same`);
};
