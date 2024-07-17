import { render, screen } from "@testing-library/react"
import GetByPlaceHolderText from "./GetByPlaceHolderText"

test("placeHolder test",()=>{
    render(<GetByPlaceHolderText/>);
    const inputBox=screen.getByPlaceholderText("placeholder text")
    expect(inputBox).toBeInTheDocument()
})