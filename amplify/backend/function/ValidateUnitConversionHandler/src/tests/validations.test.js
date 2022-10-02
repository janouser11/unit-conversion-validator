const { handler } = require("../index.js");
const helper = require("./test-helpers");

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
