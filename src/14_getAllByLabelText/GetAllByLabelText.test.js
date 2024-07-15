import { render, screen } from "@testing-library/react"
import GetAllByLabelText from "./GetAllByLabelText"

test("mutiple input Test Case",()=>{
    render(<GetAllByLabelText/>)
    //getting all inputs with same label
    const inputs=screen.getAllByLabelText("Username")
    for(let i=0; i<inputs.length; i++){
        expect(inputs[i]).toBeInTheDocument()
    }
})
