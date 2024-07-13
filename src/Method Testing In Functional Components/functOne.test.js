import { fireEvent, render, screen } from "@testing-library/react";
import FuncOne from "./FuncOne";
import handleOtherMethod from "./helper";

test("method testing case one", () => {
  render(<FuncOne />);
  const btn1 = screen.getByTestId("btn1");
  //fireevent: allows developers to trigger any event on any element
  fireEvent.click(btn1);
  expect(screen.getByText("Hello React")).toBeInTheDocument();
});

//test case for another method which returns a text

test("method testing case two", () => {
    expect(handleOtherMethod()).toMatch("Hi user"); 
    //toMatch("..."): it will contains what it returns
})