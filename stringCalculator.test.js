const add = require("../stringCalculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});
test("returns sum of single number", () => {
  expect(add("1")).toBe(1);
});
test("returns sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});
test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});
test("supports different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});
test("throws exception for negative numbers", () => {
  expect(() => add("-1,2,-3")).toThrow("Negative numbers not allowed: -1,-3");
});
