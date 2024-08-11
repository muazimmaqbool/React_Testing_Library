import { render, screen } from "@testing-library/react"
import GetByText_GetAllByText from "./GetByText_GetAllByText"

//test case for testing single button by getByText
test("single button test case",()=>{
    render(<GetByText_GetAllByText/>)
    const btn=screen.getByText("Click Me")
    expect(btn).toBeInTheDocument()
})

//? p tag and other heading tags have similar test cases
//testing single p tag by getByText
test("single p tag test case",()=>{
    render(<GetByText_GetAllByText/>)
    const pTag=screen.getByText("Click Below Button")
    expect(pTag).toBeInTheDocument()
})

//test case for multiple button by getAllByText
test("multiple buttons test case",()=>{
    render(<GetByText_GetAllByText/>)
    const btns=screen.getAllByText("Btn Test")
    for(let i=0; i<btns.length;i++){
        expect(btns[i]).toBeInTheDocument()
    } 
})


//similarly do multiple headings, p tags , etc... testing

//test case for testing multiple headings via text
test("multiple headings testing",()=>{
    render(<GetByText_GetAllByText/>);
    const h3s=screen.getAllByText(/this is h3/i)
    //adding text like this: /this is h3/i , won't check for uppercase and lowercase

    for(let i=0; i<h3s.length;i++){
        expect(h3s[i]).toBeInTheDocument()
    }
})