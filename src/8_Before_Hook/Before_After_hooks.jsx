import React, { useState } from 'react'

//here we have two beforeAll and BeforeEach , check notes

const Before_Hook = () => {
    const [data, setData] = useState("")
  return (
    <div>
    <h1>Before Hook Example</h1>
    <button onClick={()=>setData("New Data")}>Update Text</button>
    <h1>{data}</h1>
</div>
  )
}

export default Before_Hook