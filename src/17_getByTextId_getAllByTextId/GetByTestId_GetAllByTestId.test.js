import { render, screen } from "@testing-library/react"
import GetByTestId_GetAllByTestId from "./GetByTestId_GetAllByTestId"

//testing single element with test id
test("getByTextId test case example",()=>{
    render(<GetByTestId_GetAllByTestId/>)
    const data=screen.getByTestId("div-test-id")
    expect(data).toBeInTheDocument()
})

//testing multiple elements with same test id
test("getAllByTextId test case example",()=>{
    render(<GetByTestId_GetAllByTestId/>)
    const h3Tags=screen.getAllByTestId("h3-test-id")
    for(let i=0; i<h3Tags.length; i++){
        expect(h3Tags[i]).toBeInTheDocument()
    }
})