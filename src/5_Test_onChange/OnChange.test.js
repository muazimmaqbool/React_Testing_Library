import { fireEvent, render,screen } from "@testing-library/react";
import OnChangeTest from "./OnChangeTest";

//test case for onChnage event with input box

//example 1
test("onChnage event testing",()=>{
    render(<OnChangeTest/>);
    //checking is input field present on screen or not
    let isInput=screen.getByRole("textbox")
    /*fireEvent: fires event which we want to call/fire : 
    here we want to fire change event i.e: fireEvent.change()
    -> here we want to fire change event on isInput i.e: fireEvent.change(isInput,{})
    ->after fireing change event on isInput ,
    now we will check that's it has target and inside it is a value if i type "a"
                 output should also be a which we check in expect
    */
    fireEvent.change(isInput,{target:{value:'a'}});
    //means isInput should contain value 'a' if 'a' is typed
    expect(isInput.value).toBe("a")
})

//example two
test("onChnage event testing two",()=>{
    render(<OnChangeTest/>);
    //checking is input field present on screen or not
    let isInput=screen.getByRole("textbox")
    fireEvent.change(isInput,{target:{value:'javascript'}});
    expect(isInput.value).toBe("javascript")
})

//example three (this is seen very less)
/*
sometimes input field is typed like this:
        <input type='text' value={enterData+"test"} onChange={(e)=>setEnterData(e.target.value)}/>
        i.e whatever text you entered "test" texed is added to that, now to test this case we do this:
*/
// test("Onchange testing three",()=>{
//     render(<OnChangeTest/>)
//     let isInput=screen.getByRole("textbox")
//     fireEvent.change(isInput,{target:{value:"a"}});
//     expect(isInput.value).toBe("atest")
// })