const { handler } = require("../index.js");
const helper = require("./helpers.js");

describe("Validation unit tests", () => {
  it("verifies no conversions handled", async () => {
    // act
    const event = null;

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      helper.getValidationErrorResponseBody("No conversions found")
    );
  });

  it("verifies no initial problem handled", async () => {
    // act
    const event = helper.getEventWithNoInitialProblem();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      helper.getValidationErrorResponseBody("No initial problem found")
    );
  });

  it("verifies no initial problem handled", async () => {
    // act
    const event = helper.getEventWithNoStudentResponse();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      helper.getValidationErrorResponseBody("No student response found")
    );
  });

  it("verifies invalid unit of measure", async () => {
    // act
    const event = helper.getInvalidUnitOfMeasureEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      helper.getValidationErrorResponseBody(
        "Invalid unit of measure provided for initial problem: dog"
      )
    );
  });

  // todo: continue to verify against different types and rest of validation messages
});

describe("Example scenarios", () => {
  it("temperature conversion is correct", async () => {
    // act
    const event = helper.getExampleScenario1();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("temperature conversion is incorrect", async () => {
    // act
    const event = helper.getExampleScenario2();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getIncorrectResponseBody(111.5));
  });

  it("volume conversion is correct", async () => {
    // act
    const event = helper.getExampleScenario3();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("invalid conversion types", async () => {
    // act
    const event = helper.getExampleScenario4();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      helper.getValidationErrorResponseBody(
        "Units of measure must be the same type"
      )
    );
  });

  // I think this scenario should return invalid instead of incorrect since
  // it would be caught by validation and not be able to be proccessed
  it("invalid conversion type", async () => {
    // act
    const event = helper.getExampleScenario5();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      helper.getValidationErrorResponseBody("Value must be numerical")
    );
  });

  it("invalid conversion type", async () => {
    // act
    const event = helper.getExampleScenario6();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual(
      helper.getValidationErrorResponseBody(
        "Invalid unit of measure provided for initial problem: dog"
      )
    );
  });
});

const assertCorrectResponse = (response) => {
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(helper.getCorrectResponseBody());
};
