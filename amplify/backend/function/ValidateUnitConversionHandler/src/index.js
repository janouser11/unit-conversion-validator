const { validate } = require("./validate");
const { calculateConversions } = require("./calculate-conversions");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  // validating data coming in, will throw error on failure
  const validationMessage = await validate(event);

  if (validationMessage) return validationErrorResponse(validationMessage);

  const result = await calculateConversions(event);

  // {
  //   status: 'correct',
  //   message: ''
  // }
  // {
  //   status: 'invalid',
  //   message: '',
  //   correctValue: 25.25
  // }
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
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
