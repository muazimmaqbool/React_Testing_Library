import { render, screen } from "@testing-library/react"
import OnChange_Testing from "./OnChange_Testing"
import userEvent from "@testing-library/user-event"

test("onChange event testing", async ()=>{
    userEvent.setp()
    render(<OnChange_Testing/>)
    const inputEl=screen.getByRole("textbox")
    await userEvent.type(inputEl,"Muazim")
    expect(screen.getByText("Muazim")).toBeInTheDocument()
})