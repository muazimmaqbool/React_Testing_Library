import { render, screen, within } from "@testing-library/react"
import QueryingWithinElements from "./QueryingWithinElements"

test("Querying Within Elements",()=>{
    render(<QueryingWithinElements/>)
    
    //getting parent element
    let el=screen.getByText("Hello World");
    //now we test that inside this el should have element with text "Hi"

    let subEl=within(el).getByText("Hi")

    //testing another sub element inside el element
    let subEl2=within(el).getByText("Hey")
    let subEl3=within(el).getByText(/hey/i)

    expect(el).toBeInTheDocument()
    expect(subEl).toBeInTheDocument()
    expect(subEl2).toBeInTheDocument()
   
})