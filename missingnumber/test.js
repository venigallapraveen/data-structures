const missingNumber = require("./index");

test("Missing function function is defined", () => {
  expect(typeof missingNumber).toEqual("function");
});

test("find the missing value between 1 and 10", () => {
  expect(missingNumber([1, 2, 3, 5])).toEqual(4);
});

test("find the missing value to be 0 when only one number is shared", () => {
  expect(missingNumber([5])).toEqual(0);
});

test("find the missing value between 233 and 250", () => {
  expect(missingNumber([233, 231, 230, 234])).toEqual(232);
});
