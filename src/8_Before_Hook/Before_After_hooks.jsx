import React, { useState } from 'react'

/*
-> beforeAll and beforeEach hooks will run before each the test cases
    beforeAll will run before all the test cases
    beforeEach will run before each of the test cases

-> afterAll and afterEach hooks will run after each the test cases
    afterAll will run after all the test cases
    afterEach will run after each of the test cases

*/

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