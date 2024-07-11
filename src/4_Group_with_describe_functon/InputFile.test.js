import { render ,screen} from "@testing-library/react";
import InputFile from "./InputFile";

test("Test case for test",()=>{
    render(<InputFile/>)
    const text=screen.getByText("Test Case Grouping");
    expect(text).toBeInTheDocument();
})

test("Testing input box",()=>{
    render(<InputFile/>)
    let isInputBox=screen.getByRole("textbox");
    expect(isInputBox).toBeInTheDocument();
    //checking for placeholder
    let checkPlaceholder=screen.getByPlaceholderText("Enter Your Username")
    expect(checkPlaceholder).toBeInTheDocument();
    //checking for different attributes
    expect(isInputBox).toHaveAttribute("name","username")
    expect(isInputBox).toHaveAttribute("id","userID")
    expect(isInputBox).toHaveAttribute("type","text")
})

//group above two textcases together
describe("Test Case For Group",()=>{
    //here we write the test cases
    test("Test Case One",()=>{
        render(<InputFile/>)
        const checkInput=screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name","username")
    })
    test("Test Case Two",()=>{
        render(<InputFile/>)
        let checkPlaceholder=screen.getByPlaceholderText("Enter Your Username")
        expect(checkPlaceholder).toBeInTheDocument();
    })
    test("Test Case Three",()=>{
        render(<InputFile/>)
        const checkInput=screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("id","userID")
    })
})

//creating another group
//if you want to test only test group then do this: describe.only("...",()=>{....})

 //now only this group will be tested remaining test cases and groups will be skipped
//describe.only("Test Case Group Two",()=>{

//now this test group will be skipped remaining test cases and groups will be tested
    describe.skip("Test Case Group Two",()=>{
    test("UITest Case One",()=>{
        render(<InputFile/>)
        const text=screen.getByText("Test Case Grouping");
        expect(text).toBeInTheDocument();
    })
    test("UI Test Case Two",()=>{
        render(<InputFile/>)
        let checkInputField=screen.getByRole("textbox")
        expect(checkInputField).toBeInTheDocument();
    })
})

//now we can use .only and .skip with simple test cases as well
test.skip("Test case Skipped",()=>{
    render(<InputFile/>)
    const text=screen.getByText("Test Case Grouping");
    expect(text).toBeInTheDocument();
})

//nested describe (having group inside group)
describe("Nested Describe ",()=>{
    test("UITest Case One",()=>{
        render(<InputFile/>)
        const text=screen.getByText("Test Case Grouping");
        expect(text).toBeInTheDocument();
    })
    test("UI Test Case Two",()=>{
        render(<InputFile/>)
        let checkInputField=screen.getByRole("textbox")
        expect(checkInputField).toBeInTheDocument();
    })
    describe("Inside Another Describe",()=>{
        test("Test Case Three",()=>{
            render(<InputFile/>)
            const checkInput=screen.getByRole("textbox");
            expect(checkInput).toHaveAttribute("id","userID")
        })
    })
})