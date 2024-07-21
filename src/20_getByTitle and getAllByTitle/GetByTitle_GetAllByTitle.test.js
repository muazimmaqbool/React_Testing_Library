import { render, screen } from "@testing-library/react"
import GetByTitle_GetAllByTitle from "./GetByTitle_GetAllByTitle"

test("testing element using getByTitle",()=>{
    render(<GetByTitle_GetAllByTitle/>)
    const btn=screen.getByTitle("click me button");
    expect(btn).toBeInTheDocument()

    //testing icon inside span via title
    const span=screen.getByTitle("black spade icon")
    expect(span).toBeInTheDocument()
    
})

test("testing multiple buttons using getAllByTitle",()=>{
    render(<GetByTitle_GetAllByTitle/>)
    const btns=screen.getAllByTitle("see more button");
    for(let i=0; i<btns.length; i++){
        expect(btns[i]).toBeInTheDocument()
    }
})