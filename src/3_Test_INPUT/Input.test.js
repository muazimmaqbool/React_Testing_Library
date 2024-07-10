import { render ,screen} from "@testing-library/react";
import Input from "./Input";

test("Test case 1",()=>{
    render(<Input/>)
    const test=screen.getByText("Testing Input Box");
    expect(test).toBeInTheDocument();
})

//test case 2 for input box
/*
->First we will check whether the input box exists or not
*/
test("Testing input box",()=>{
    render(<Input/>)
    let isInputBox=screen.getByRole("textbox"); //here we write textbox inplace of input box as its predefined
    expect(isInputBox).toBeInTheDocument(); //this will check is textbox(input box) present in the <Input/> function/component or not

    //now we will check things inside the input box like name, placeholder,value etc...

    //checking for placeholder
    let checkPlaceholder=screen.getByPlaceholderText("Enter Your Username")
    expect(checkPlaceholder).toBeInTheDocument();

    //checking for name attribute of input box
    expect(isInputBox).toHaveAttribute("name","username") //attribue is "name" and it should be "username"

    //checking for id attribute of input box
    expect(isInputBox).toHaveAttribute("id","userID")

    //checking for type attribute of input box
    expect(isInputBox).toHaveAttribute("type","text")

    //checking for value attribute of input box
    expect(isInputBox).toHaveAttribute("value","USER123")
})

//test case for checkbox
test("Testing checkbox",()=>{
    render(<Input/>)
    let isCheckBox=screen.getByRole("checkbox");
    expect(isCheckBox).toBeInTheDocument();

    expect(isCheckBox).toHaveAttribute("id","checkBoxOne")
})