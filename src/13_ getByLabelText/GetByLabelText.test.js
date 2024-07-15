import { render, screen } from "@testing-library/react"
import GetByLabelText from "./GetByLabelText"

test("Test case of input",()=>{
    render(<GetByLabelText/>)
    const inputBox=screen.getByLabelText("Username")
    expect(inputBox).toBeInTheDocument()
})