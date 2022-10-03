const { handler } = require("../index.js");
const helper = require("./volume-helpers");

const assertCorrectResponse = (response) => {
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(helper.getCorrectResponseBody());
};

describe("Converting from liters", () => {
  it("successfully converts to tablespoons", async () => {
    // act
    const event = helper.getCorrectLiterToTablespoonEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cubic inches", async () => {
    // act
    const event = helper.getCorrectLiterToCubicInchesEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cups", async () => {
    // act
    const event = helper.getCorrectLiterToCupsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cubic feet", async () => {
    // act
    const event = helper.getCorrectLiterToCubicFeetEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to gallons", async () => {
    // act
    const event = helper.getCorrectLiterToGallonsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });
});

describe("Converting from tablespoons", () => {
  it("successfully converts to liters", async () => {
    // act
    const event = helper.getCorrectTablespoonToLitersEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cubic inches", async () => {
    // act
    const event = helper.getCorrectTablespoonToCubicInchesEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cups", async () => {
    // act
    const event = helper.getCorrectTablespoonToCupsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cubic feet", async () => {
    // act
    const event = helper.getCorrectTablespoonToCubicFeetEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to gallons", async () => {
    // act
    const event = helper.getCorrectTablespoonToGallonsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });
});

describe("Converting from cubic inches", () => {
  it("successfully converts to liters", async () => {
    // act
    const event = helper.getCorrectCubicInchesToLitersEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to tablespoons", async () => {
    // act
    const event = helper.getCorrectCubicInchesToTablespoonsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cups", async () => {
    // act
    const event = helper.getCorrectCubicInchesToCupsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cubic feet", async () => {
    // act
    const event = helper.getCorrectCubicInchesToCubicFeetEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to gallons", async () => {
    // act
    const event = helper.getCorrectCubicInchesToGallonsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });
});

describe("Converting from cups", () => {
  it("successfully converts to liters", async () => {
    // act
    const event = helper.getCorrectCupsToLitersEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to tablespoons", async () => {
    // act
    const event = helper.getCorrectCupsToTablespoonsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cubic inches", async () => {
    // act
    const event = helper.getCorrectCupsToCubicInchesEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cubic feet", async () => {
    // act
    const event = helper.getCorrectCupsToCubicFeetEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to gallons", async () => {
    // act
    const event = helper.getCorrectCupsToGallonsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });
});

describe("Converting from cubic feet", () => {
  it("successfully converts to liters", async () => {
    // act
    const event = helper.getCorrectCubicFeetToLitersEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to tablespoons", async () => {
    // act
    const event = helper.getCorrectCubicFeetToTablespoonsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cubic inches", async () => {
    // act
    const event = helper.getCorrectCubicFeetToCubicInchesEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cups", async () => {
    // act
    const event = helper.getCorrectCubicFeetToCupEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to gallons", async () => {
    // act
    const event = helper.getCorrectCubicFeetToGallonsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });
});

describe("Converting from gallons", () => {
  it("successfully converts to liters", async () => {
    // act
    const event = helper.getCorrectGallonsToLitersEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to tablespoons", async () => {
    // act
    const event = helper.getCorrectGallonsToTablespoonsEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cubic inches", async () => {
    // act
    const event = helper.getCorrectGallonsToCubicInchesEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cups", async () => {
    // act
    const event = helper.getCorrectGallonsToCupEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });

  it("successfully converts to cubic feet", async () => {
    // act
    const event = helper.getCorrectGallonsToCubicFeetEvent();

    //arrange
    const response = await handler(event);

    //assert
    assertCorrectResponse(response);
  });
});
