import { render, screen } from "@testing-library/react"
import FindBy_FindAllBy from "./FindBy_FindAllBy"

test("Testing using findBy",async ()=>{
    render(<FindBy_FindAllBy/>)

    //const el=screen.getByText("Data Is Loaded")//it will fail because h3 is displayed late
    //expect(el).toBeInTheDocument()

   // const el=await screen.findByText("Data Is Loaded")
    //it will still fail because findByText work with asyn so we need to make function async
    //Note: findBy checks elements which loads within 1 second so if a elements loads in 1second
    //or after 1 second it fails
    //try 1000 value in jsx code in setTimeout and then try for less then 1 second

    //Now what if load time is higher then 1 second then use third parameter(second parameter is optional)
    //screen.findByText("Data Is Loaded",{},{timeout:4000})
    const el=await screen.findByText("Data Is Loaded",{},{timeout:4000})//test case will run in 4 seconds
    //now try 3 seconds time in setTimeout and then try


    expect(el).toBeInTheDocument()
    
})

//findAllBy used in same way as getAllBy