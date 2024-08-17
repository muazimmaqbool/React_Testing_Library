import { render, screen } from "@testing-library/react"
import User from "./User"

test("Props testing",()=>{
    const name="Basit" //this value will be passed to User component in test file
    render(<User name={name}/>)

    //now checking whether the User receiving same prop
   // const user=screen.getByText(name)
   //or
   const user=screen.getByText(`User name:${name}`)
    expect(user).toBeInTheDocument()

})