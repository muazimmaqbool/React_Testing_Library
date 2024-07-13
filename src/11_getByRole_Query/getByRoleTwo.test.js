import { render, screen } from "@testing-library/react";
import GetByRole_Two from "./GetByRole_Two"

//test case when we have multiple buttons on the screen
test("multiple button test",()=>{
    render(<GetByRole_Two/>);

    //this works fine when we have only one button on screen, but with many buttons test case will fail
    //const btn1=screen.getByRole("button");

    //now it will test button which has test "BTN ONE" and test case will pass
    const btn1=screen.getByRole("button",{name:"BTN ONE"});
    //similarly can test for button two
    const btn2=screen.getByRole("button",{name:"BTN TWO"});

    expect(btn1).toBeInTheDocument()
    expect(btn2).toBeInTheDocument()
})

//test case when we have multiple input boxes on the screen
test("multiple input box testing",()=>{
    render(<GetByRole_Two/>)

    //works fine with one input box
    //const inputOne=screen.getByRole("textbox")

    //for testing multiple input boxes we use label in the component see in getByRole_Two.jsx component
    const inputOne=screen.getByRole("textbox",{name:"User Name:"})
    //similarly can test for another input box
    const inputTwo=screen.getByRole("textbox",{name:"Email:"})
    expect(inputOne).toBeInTheDocument()
    expect(inputTwo).toBeInTheDocument()
})

//custom role test case for non-semantic element
test("custom role test case",()=>{
    render(<GetByRole_Two/>)
    const dv1=screen.getByRole("extraInfo")
    expect(dv1).toBeInTheDocument()
})