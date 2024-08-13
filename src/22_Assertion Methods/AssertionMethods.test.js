import { render, screen } from "@testing-library/react"
import AssertionMethods from "./AssertionMethods"

test("Assertions Methods on input",()=>{
    render(<AssertionMethods/>)
    const input=screen.getByRole("textbox")
    
    //it will check whether the input is present in the ui or not
    expect(input).toBeInTheDocument()

    //checking via its value
    expect(input).toHaveValue("react") 
    // if you write like this : .toHaveValue() it will pass here it will check whether it has some value or not and will return true or false
    expect(input).toHaveValue() 

    //checking whether its enabled or disabled
    expect(input).toBeEnabled()
    //if you add disabled attributed in the input it will field

    //if input is disabled and you want to test it
    //expect(input).toBeDisabled() //commented so it won't fail
    //to make it work first add disabled attribute to the input field in jsx file

    //checking whether it has some specific attribute or not like id
    expect(input).toHaveAttribute("id")

    //checking data-testid attribute
    expect(input).toHaveAttribute("data-testid")

    //checking via class
    expect(input).toHaveClass("test-style")

 
    //there are many other Assertion Methods
    
})

//negative test cases i.e checking that element should not be present 
test("negative test case",()=>{
    render(<AssertionMethods/>)
    const btn=screen.getByRole("button");
    expect(btn).toBeInTheDocument() //success if button is not commented in the jsx file

    // expect(btn).not.toBeInTheDocument() //success if button is commented in the jsx file

    //checking the button should not have the class "btnOne" if  you change the class "btnOne" it will work
   // expect(btn).not.toHaveClass("btnOne")

})