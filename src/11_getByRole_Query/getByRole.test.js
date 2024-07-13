import { render, screen } from "@testing-library/react"
import GetByRole from "./GetByRole"

test("getByRole Test case",()=>{
    render(<GetByRole/>);
    //screen is used to findout any element from the ui
    const inputBox=screen.getByRole('textbox'); //textbox is used to find input fields
    //checking whether the inputBox is present in the screen or not
    expect(inputBox).toBeInTheDocument()

    //checking default value which is inside input field
    expect(inputBox).toHaveValue("hello")

    //checking whether the input field is disable or enabled
    //expect(inputBox).toBeDisabled(); //will fail because input is not disabled
    //to make it work do this:  <input type='text' defaultValue="hello" disabled/> on component
    
})
test("Test Case for button",()=>{
    render(<GetByRole/>);
    const btn=screen.getByRole("button");
    expect(btn).toBeInTheDocument()
})