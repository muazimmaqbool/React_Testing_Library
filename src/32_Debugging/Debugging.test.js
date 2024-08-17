import { logRoles, prettyDOM, render, screen } from "@testing-library/react"
import Debugging from "./Debugging"

//automtic debugging here when it fails
test("Testing components",()=>{
    render(<Debugging/>)
    const el=screen.getByText("Heading 2")
    expect(el).toBeInTheDocument()
})

test("pretty Dom ,debug func, logRoles debugging",()=>{
    const {container, debug}=render(<Debugging/>)
    //console.log(container)

    //console.log(prettyDOM(container))
    //now you see the jsx/html/ return code of your jsx file in the console

    //or you can ue debug function
    //debug()

   logRoles(container)
})