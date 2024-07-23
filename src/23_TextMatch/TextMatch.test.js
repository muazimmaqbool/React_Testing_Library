import { render, screen } from "@testing-library/react"
import TextMatch from "./TextMatch"

//when we test it we check Text and it should be same in ui but what if the fist letter is is "UpperCase" or "LowerCase"
//then test case fails to avoid that we pass second argument to tell it letters could be uppercase and lowercase

test("Text match with string",()=>{
    render(<TextMatch/>)
   // const divEl=screen.getByText("Hello World");

   //exact: is false now means it will not check for uppercase and lowercase
   //and it will also check for few words to check like if you remove World it will still pass
   const divEl=screen.getByText("Hello WORLD",{exact:false});
   //const divEl=screen.getByText("Hello",{exact:false}); //will also work
    expect(divEl).toBeInTheDocument()
})

//what ever is written in between  / / should be inside your string
test("Text match with regex",()=>{
    render(<TextMatch/>)
    //const div=screen.getByText("Hello World");

    //here it will check that hello should be included
    //const div=screen.getByText(/Hello/);//works
    
    //lo wo should be included in the string/ui/div
    const div=screen.getByText(/lo Wo/);//works
    expect(div).toBeInTheDocument()
})