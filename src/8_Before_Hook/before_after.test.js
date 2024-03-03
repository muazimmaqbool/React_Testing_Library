import { fireEvent, render, screen } from "@testing-library/react";
import Before_After from "./Before_After_hooks";
import cleanDataBase from "./cleandatabase";

//?befoeAll hook (will be runned only once before all test cases)
// beforeAll(() => {
//   console.log("beforeAll hook runs..."); //it will be displayed in terminal
// });

//?beforeEach hook (it will run before all test cases i.e 3 times (sice we have 3 test cases))
beforeEach(()=>{
   // console.log("beforeEach Hook runs...")
   cleanDataBase(); //this function is called before each test case, this way you call call any API etc before and afer test cases
})

//?: we can write afterEach and afterAll here also but i have write that after test cases

test("Test case 1", () => {
  console.log("1");
  render(<Before_After />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("New Data")).toBeInTheDocument();
});

test("Test case 2", () => {
  console.log("2");
  render(<Before_After />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("New Data")).toBeInTheDocument();
});

test("Test case 3", () => {
  console.log("3");
  render(<Before_After />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("New Data")).toBeInTheDocument();
});

//we can write these hook before test cases as well

//?afterAll hook (will be runned only once after all test cases)
// afterAll(()=>{
//     console.log("afterAll hook runs....")
// })

//?afterEach hook (it will run after all test cases i.e 3 times (sice we have 3 test cases))
// afterEach(()=>{
//   console.log("afterEach hook runs...")
// })

//see console.log output in terminal of test cases as well and see how afterall and before all runs