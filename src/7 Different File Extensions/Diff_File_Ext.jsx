import React, { useState } from 'react'
//this component has 4 different test cases with different extensions
//this component also has 1 test file with name __tests__ and inside it we also have above 4 test files without the test/spec extensions 
//inside __tests__ extentions of tests is not necessary

const Diff_File_Ext = () => {
  const [data, setData] = useState("")
  return (
    <div>
        <h1>This Component Has many Test Files With Different Extensions and one test folder</h1>
        <button onClick={()=>setData("New Data")}>Update Text</button>
        <h1>{data}</h1>
    </div>
  )
}

export default Diff_File_Ext