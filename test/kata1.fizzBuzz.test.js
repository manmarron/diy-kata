const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(12)).toBe('Fizz');
    expect(fizzBuzz(99999)).toBe('Fizz');
    expect(fizzBuzz(17)).toBe(17);

  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(1555)).toBe('Buzz');
    expect(fizzBuzz(18.2)).toBe(18.2);
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(60)).toBe('FizzBuzz');
    expect(fizzBuzz(90)).toBe('FizzBuzz');
    expect(fizzBuzz(-17)).toBe(-17);
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(1.56789)).toBe(1.56789);
    expect(fizzBuzz(-17)).toBe(-17);
    expect(fizzBuzz(17)).toBe(17);
  });
});
