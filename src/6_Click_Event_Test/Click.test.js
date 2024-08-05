import { fireEvent, render, screen } from "@testing-library/react";
import ClickTest from "./ClickTest";

test("Click Event Test Case",()=>{
    render(<ClickTest/>);
    //checking is button element present on the screen/getting button element
    const btn=screen.getByRole("button");

    //firing click event on button
    fireEvent.click(btn); 

     //checking is NewData on screen after/when button is clicked
    expect(screen.getByText("New Data")).toBeInTheDocument();
})