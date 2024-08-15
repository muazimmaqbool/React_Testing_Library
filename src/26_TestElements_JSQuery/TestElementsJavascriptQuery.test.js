import { render } from "@testing-library/react"
import TestElementsJavascriptQuery from "./TestElementsJavascriptQuery"

test("Testing elements with javascript query|Custom Query",()=>{
    render(<TestElementsJavascriptQuery/>)

    //here we can give classname ".testName", or id's etc
    const divEl=document.querySelector("#testId")
    expect(divEl).toBeInTheDocument()
    //try for text
    expect(divEl).toHaveTextContent("Hello World")
    //check whether the element hasclass attribute or not
    expect(divEl).toHaveAttribute("class")
})
//for testing multiple elements we have: querySelectorAll

test("Multiple elements testing using custom query",()=>{
    render(<TestElementsJavascriptQuery/>)

    const h4s=document.querySelectorAll("#h4Id")
    for(let i=0; i<h4s.length; i++){
        expect(h4s[i]).toBeInTheDocument()
        expect(h4s[i]).toHaveTextContent(/heading h4/i)
    }
})