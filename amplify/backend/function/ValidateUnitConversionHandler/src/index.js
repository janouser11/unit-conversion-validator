const { validate } = require("./validate");
const { calculateConversions } = require("./calculate-conversions");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  // validating data coming in, will return validation message if invalid
  const jsonBody = JSON.parse(event.body);
  const validationMessage = await validate(jsonBody);

  if (validationMessage) return validationErrorResponse(validationMessage);

  const result = await calculateConversions(jsonBody);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(result),
  };
};

const validationErrorResponse = (message) => ({
  statusCode: 400,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
  body: JSON.stringify({
    status: "invalid",
    message,
  }),
});
