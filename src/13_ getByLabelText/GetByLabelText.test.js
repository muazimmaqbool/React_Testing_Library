import { render, screen } from "@testing-library/react"
import GetByLabelText from "./GetByLabelText"

test("Test case of input",()=>{
    render(<GetByLabelText/>)
    const inputBox=screen.getByLabelText("Username")
    expect(inputBox).toBeInTheDocument()

    //for check default value of input field
    expect(inputBox).toHaveValue("React")
})


test("Test case of checkbox",()=>{
    render(<GetByLabelText/>)
    const checkBox=screen.getByLabelText("Payment Done")
    expect(checkBox).toBeInTheDocument()

})
