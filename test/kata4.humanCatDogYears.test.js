const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!

describe("humanCatDogYears", () => {
    test("return cat, dog and human years based on human years passing through", () => {
      

        
        expect(humanCatDogYears(10)).toEqual([10,56,64]);
        expect(humanCatDogYears(1)).toEqual([1,15,15]);
        expect(humanCatDogYears(-1)).toEqual("Please provide a whole number not minus or decimal");
        expect(humanCatDogYears(11.1)).toEqual([11.1, 60.4, 69.5]);
    });
}); 