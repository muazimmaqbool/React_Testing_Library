import React from "react";

/*
->Lec #31
->Assertion Methods:
    In this series we have used the assertions methods through out in all the examples.

->Assertion Methods: basically in the test case file we have a line:
    expect(img).toBeInTheDocument(): this line is assertion method.
    Basically whenever we test an element and in order to test it we match/check any value of the element
    i.e expect(img) : we are checking whether this img is present in the document or not.
    so: expect() is "Assert or Assertion"
    and toBeInTheDocument() is "Assert method or Assertion Method"
    ->with the help of "Assert method" we test an element

->Here in this example we will see various assertions methods inside test file
    we will see around 10 assertions methods

*/

const AssertionMethods = () => {
  return (
    <div>
      <h1>Assertion Methods</h1>
      <input
        type="text"
        defaultValue={"react"}
        name="ReactTesting"
        className="test-style"
        id="user-name"
        data-testid="test-input"
      />


      <button className="btnOne">Click Me Button</button>
    </div>
  );
};

export default AssertionMethods;
