import { render } from "@testing-library/react"
import TestElementsJavascriptQuery from "./TestElementsJavascriptQuery"

test("Testing elements with javascript query|Custom Query",()=>{
    render(<TestElementsJavascriptQuery/>)

    //here we can give classname ".testName", id's etc
    const divEl=document.querySelector("#testId")
    expect(divEl).toBeInTheDocument()
    //try for text
    expect(divEl).toHaveTextContent("Hello World")
})