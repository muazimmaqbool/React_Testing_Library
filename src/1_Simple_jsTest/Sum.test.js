import Sum from "./Sum";

//example 1
// test("Test case for sum function", () => {
//   expect(Sum(5, 10)).toBe(15);
// });

//example 2
test("Test case for sum function", () => {
  let a = 5;
  let b = 15;
  let output = a + b; //check for let output =50
  expect(Sum(a, b)).toBe(output);
});

test("Test case Two for sum function", () => {
    let a = 15;
    let b = 15;
    let output = a + b; //check for let output =50
    expect(Sum(a, b)).toBe(output);
  });
  
