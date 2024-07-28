import { render, screen } from "@testing-library/react"
import API_Testing from "./API_Testing"

test("Test header",()=>{
    render(<API_Testing/>)
    const el=screen.getByText("API Testing")
    expect(el).toBeInTheDocument()
})

//testing api without MSW, i.e real API response
// test("Testing API",async()=>{
//     render(<API_Testing/>)
//     const el=await screen.findAllByRole("listitem")
//     expect(el).toHaveLength(10)
// })

//testing api with MSW, i.e mocking API
test("Testing API  With MSW",async()=>{
    render(<API_Testing/>)
    const el=await screen.findAllByRole("listitem")
    expect(el).toHaveLength(3)
})