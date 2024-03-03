import React, { useState } from 'react'

const ClickTest = () => {
 //here in this example we will test that is the text getting changed with the help of state and button 
 //basically when we click on the button the text data state variable should get updated and we will test it in out test file
 //is it getting updated or not
const [data, setData] = useState("")
  return (
    <div>
        <h1>Test Click Event With Button</h1>
        <button onClick={()=>setData("New Data")}>Update Text</button>
        <h1>{data}</h1>
    </div>
  )
}

export default ClickTest