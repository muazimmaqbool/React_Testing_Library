import { render, screen } from "@testing-library/react"
import QueryBy_QueryAllBy from "./QueryBy_QueryAllBy"

//testing hidden button element using queryBy
test("Test Cases for QueryBy",()=>{
    render(<QueryBy_QueryAllBy/>)

   // const btn=screen.getByText("Logout") // will will not find the button in code
   //fails as logout is hidden now lets try with queryBy

   //using this line we will check whether the button is present in the code or not
    const btn=screen.queryByText("Logout") 
    //expect(btn).toBeInTheDocument() ,//checks for ui
    //it will fail if you use toBeInTheDocument() because button is present in the code and not in the ui

    expect(btn).not.toBeInTheDocument() //runs, as the button is not present in the ui but in the code
})

//testing multiple hidden h2 tags using queryBy
test("Test case for multiple hidden h2 tags",()=>{
    render(<QueryBy_QueryAllBy/>)

    const h2Tags=screen.queryAllByText("Heading Two")
    for(let i=0; i<h2Tags.length; i++){
        expect(h2Tags[i]).not.toBeInTheDocument()
    }
})