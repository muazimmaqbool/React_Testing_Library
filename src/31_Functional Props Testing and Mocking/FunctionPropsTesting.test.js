import { render, screen } from "@testing-library/react"
import FunctionPropsTesting from "./FunctionPropsTesting"
import userEvent from "@testing-library/user-event"

test("Functional props Testing",async ()=>{

    //mocking a function : onClick={props.testFunction}> see in jsx file
    const testFunction=jest.fn()
    userEvent.setup() //it should be inside async function

    render(<FunctionPropsTesting testFunction={testFunction} />)
    const btn=screen.getByRole("button");
    await userEvent.click(btn)

    //here defining that testFunction should be callled
    expect(testFunction).toBeCalled()
    //toBeCalled() checks whether the function is called properly or not

})