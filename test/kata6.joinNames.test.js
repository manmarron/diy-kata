const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toBe('Bart, Lisa & Maggie');
    expect(joinNames([{name: 'nick'}, {name: 'john'}, {name: 'ian'}, {name: 'ste'}])).toBe('nick, john, ian & ste');
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}])).toBe('Bart & Lisa');
    expect(joinNames([{name: 'Bart'}])).toBe('Bart');
  });
});
