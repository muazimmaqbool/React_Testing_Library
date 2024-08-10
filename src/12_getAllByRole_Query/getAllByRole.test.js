import { render, screen } from "@testing-library/react"
import GetAllByRole from "./GetAllByRole";


test("getAllByRole buttons Test case",()=>{
    render(<GetAllByRole/>);
    const btns=screen.getAllByRole("button")

    //when used getAllByRole the returned value is an array
    //expect(btns[0]).toBeInTheDocument() //will check for first element/button
    //expect(btns[1]).toBeInTheDocument() //will check for second element/button

    //for checking all
    for(let i=0; i<btns.length;i++){
        expect(btns[i]).toBeInTheDocument()
    }
})

test("getAllByRole on options",()=>{
    render(<GetAllByRole/>)
    //getting options of select/dropdown
    const options=screen.getAllByRole("option")
    for(let i=0; i<options.length;i++){
        expect(options[i]).toBeInTheDocument()
    }
})