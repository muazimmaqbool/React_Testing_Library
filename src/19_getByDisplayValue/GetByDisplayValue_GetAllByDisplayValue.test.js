import { render, screen } from "@testing-library/react"
import GetByDisplayValue_GetAllByDisplayValue from "./GetByDisplayValue_GetAllByDisplayValue"

//testing single elements on the basis of the display value
test("testing single element by displayValue",()=>{
    render(<GetByDisplayValue_GetAllByDisplayValue/>)
    const input=screen.getByDisplayValue("Javascript")
    expect(input).toBeInTheDocument()
    
    //testing textarea
    const textArea=screen.getByDisplayValue("React Testing library examples")
    expect(textArea).toBeInTheDocument()

    //testing radio button
    const radioBtn=screen.getByDisplayValue(/male/i)
    expect(radioBtn).toBeInTheDocument()


})

//testing multiple elements on the basis of the display value using getAllByDisplayValue
test("testing multiple elements by display value",()=>{
    render(<GetByDisplayValue_GetAllByDisplayValue/>)
    const inputs=screen.getAllByDisplayValue("react")
    for(let i=0; i<inputs.length; i++){
        expect(inputs[i]).toBeInTheDocument()
    }
})