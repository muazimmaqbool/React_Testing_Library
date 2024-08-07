import { fireEvent, render, screen } from "@testing-library/react";
import Diff_File_Ext from "./Diff_File_Ext";

//test case inside file with extension .spec.js

test("Click Event using .spec.js",()=>{
    render(<Diff_File_Ext/>);
    const btn=screen.getByRole("button");
    fireEvent.click(btn); 
    expect(screen.getByText("New Data")).toBeInTheDocument(); 
})