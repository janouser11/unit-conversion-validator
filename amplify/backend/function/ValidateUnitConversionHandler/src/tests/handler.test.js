const { handler } = require("../index.js");
const helper = require("./test-helpers");

describe("Converting from fahrenheit", () => {
  // testing fahrenheit => other temps
  it("successfully converts fahrenheit to celsius", async () => {
    // act
    const event = helper.getCorrectFahrenheitToCelsiusEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });

  it("unsuccessfully converts fahrenheit to celsius", async () => {
    // act
    const event = helper.getIncorrectFahrenheitToCelsiusEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getIncorrectResponseBody(0));
  });

  it("successfully converts fahrenheit to kelvin", async () => {
    // act
    const event = helper.getCorrectFahrenheitToKelvinEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });

  it("successfully converts fahrenheit to rankine", async () => {
    // act
    const event = helper.getCorrectFahrenheitToRankineEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });

  it("successfully converts fahrenheit to rankine", async () => {
    // act
    const event = helper.getCorrectFahrenheitToRankineEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });
});

describe("Converting from celsius", () => {
  it("successfully converts celsius to kelvin", async () => {
    // act
    const event = helper.getCorrectCelsiusToKelvinEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });

  it("successfully converts celsius to fahrenheit", async () => {
    // act
    const event = helper.getCorrectCelsiusToFahrenheitEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });

  it("successfully converts celsius to rankine", async () => {
    // act
    const event = helper.getCorrectCelsiusToRankineEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });
});

describe("Converting from rankine", () => {
  it("successfully converts rankine to kelvin", async () => {
    // act
    const event = helper.getCorrectRankineToKelvinEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });

  it("successfully converts rankine to celsius", async () => {
    // act
    const event = helper.getCorrectRankineToCelsiusEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });

  it("successfully converts rankine to fahrenheit", async () => {
    // act
    const event = helper.getCorrectRankineToFahrenheitEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });
});

describe("Converting from kelvin", () => {
  it("successfully converts kelvin to rankine", async () => {
    // act
    const event = helper.getCorrectKelvinToRankineEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });

  it("successfully converts kelvin to celsius", async () => {
    // act
    const event = helper.getCorrectKelvinToCelsiusEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });

  it("successfully converts kelvin to fahrenheit", async () => {
    // act
    const event = helper.getCorrectKelvinToFahrenheitEvent();

    //arrange
    const response = await handler(event);

    //assert
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(helper.getCorrectResponseBody());
  });
});

describe("Testing handler with volumes", () => {
  it("successfully converts fahrenheit to celsius", async () => {
    // act
    //arrange
    //assert
  });
});
