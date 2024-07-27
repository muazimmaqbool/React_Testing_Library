import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import ActFunction from "./ActFunction";

test("Act Function Example",async ()=>{
    userEvent.setup();
    render(<ActFunction/>)
    const el=screen.getByRole("textbox")
  // await userEvent.type(el,"React")

  //act function will update the state first then the accert function will be called
  await act(async()=>{
    await userEvent.type(el,"React")
  })
    
    expect(screen.getByText("React")).toBeInTheDocument()
})