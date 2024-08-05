import React, { useState } from 'react'

const OnChangeTest = () => {
    const [enterData, setEnterData] = useState("")
    const [someText, setSomeText] = useState("")
  return (
    <div>
      <h1>Test onChnage with input box</h1>
      <input type='text' value={enterData} onChange={(e)=>setEnterData(e.target.value)}/>
      <p>{enterData}</p>
    </div>
  )
}

export default OnChangeTest