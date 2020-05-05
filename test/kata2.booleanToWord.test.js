const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns yes if true and no if false", () => {
    expect(booleanToWord(false)).toBe('No');
    expect(booleanToWord(true)).toBe('Yes');
  });

});