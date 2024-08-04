import { render,screen } from "@testing-library/react";
import ReactFunc from "./ReactFunc";
// import '@testing-library/jest-dom/extend-expect'; 
//for text
test("first test case for react",()=>{
    render(<ReactFunc/>);
    //const text=screen.getByText("First React Test Case") //this way it will check for text match and also for letter cases (for upper and lower case)
    const text=screen.getByText(/First React Test Case/i) //this way it will check for text match but not for upper and lower case
    expect(text).toBeInTheDocument();
})

//for text which is title for image watch at 10:30 lec-5
test("test case for cricket bat image",()=>{
    render(<ReactFunc/>);
    const imageTitle=screen.getByTitle("Cricket Bat Image");
    expect(imageTitle).toBeInTheDocument();
})

//we can do these tests together i.e multiple tests in one test case
test("test case image and two texts",()=>{
    render(<ReactFunc/>);
    const text=screen.getByText(/First React Test Case/i) 
    const textTWO=screen.getByText("This is New Text")
    const imageTitle=screen.getByTitle("Cricket Bat Image"); //here it will also check for text cases
    expect(text).toBeInTheDocument();
    expect(textTWO).toBeInTheDocument();
    expect(imageTitle).toBeInTheDocument();
})

//Note Here: we have 3 test cases and in last test case we have 3 tests
