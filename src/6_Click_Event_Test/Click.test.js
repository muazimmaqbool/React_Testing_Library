import { fireEvent, render, screen } from "@testing-library/react";
import ClickTest from "./ClickTest";

test("Click Event Test Case",()=>{
    render(<ClickTest/>);
    const btn=screen.getByRole("button");//checking is button element present on the screen/getting button element
    fireEvent.click(btn); //firing click event on button
    expect(screen.getByText("New Data")).toBeInTheDocument(); //checking is NewData on screen after/when button is clicked
})