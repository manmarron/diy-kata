const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123)).toMatchObject([3,2,1]);
    expect(numberToReversedDigits(456)).toMatchObject([6,5,4]);

  });
});
