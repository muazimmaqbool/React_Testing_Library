import { render, screen } from "@testing-library/react"
import GetByDisplayValue_GetAllByDisplayValue from "./GetByDisplayValue_GetAllByDisplayValue"

//testing single elements of the basis of the display value
test("testing single element by displayValue",()=>{
    render(<GetByDisplayValue_GetAllByDisplayValue/>)
    const input=screen.getByDisplayValue("Javascript")
    expect(input).toBeInTheDocument()
})