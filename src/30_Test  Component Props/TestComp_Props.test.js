import { render, screen } from "@testing-library/react"
import User from "./User"

test("Props testing",()=>{
    const name="Basit" //value is passed to user
    render(<User name={name}/>)

    //now checking whether the User receiving same component
   // const user=screen.getByText(name)
   //or
   const user=screen.getByText(`User name:${name}`)
    expect(user).toBeInTheDocument()

})