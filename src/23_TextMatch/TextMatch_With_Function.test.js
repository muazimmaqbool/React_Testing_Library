import { render, screen } from "@testing-library/react"
import TextMatch_With_Function from "./TextMatch_With_Function"

test("TextMatch With Function",()=>{
    render(<TextMatch_With_Function/>)

    //element is second argument and its optional
    //here this callback function will check whether the text in ui/element starts with "Hello"
   // const divEl=screen.getByText((text,element)=>text.startsWith("Hello"))

   //now it will check whether the text ends with Worlds or not
   //const divEl=screen.getByText((text,element)=>text.endsWith("World")) // ld , d : also workds
   //const divEl=screen.getByText((text,element)=>text.endsWith("ld")) //works


   //it will check whether the text in ui contains this text/string
    const divEl=screen.getByText((text)=>{
        return text.includes("rl")
    })

    expect(divEl).toBeInTheDocument()
})