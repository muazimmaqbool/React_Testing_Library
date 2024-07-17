import { render, screen } from "@testing-library/react"
import GetAllByPlaceHolderText from "./GetAllByPlaceholderText"

test("multiple placeHolder test",()=>{
    render(<GetAllByPlaceHolderText/>);
    const inputs=screen.getAllByPlaceholderText("Username")
    for(let i=0;i<inputs.length;i++){
        expect(inputs[i]).toBeInTheDocument()
    }
})