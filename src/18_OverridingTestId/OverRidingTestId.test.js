import { configure, render, screen } from "@testing-library/react"
import OverRidingTestId from "./OverRidingTestId"

configure({testIdAttribute:"element-id"})
//here we write custom attribute


test("overriding tests id",()=>{
    render(<OverRidingTestId/>)
    const divElement=screen.getByTestId("test-div")
    expect(divElement).toBeInTheDocument()
})