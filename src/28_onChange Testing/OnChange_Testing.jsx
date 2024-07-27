import React,{useState} from 'react'

/*
->Lec #39  (lec #38 skipped , optional to learn)

->onChange Event Testing / keyboard Interactions:
    
*/
const OnChange_Testing = () => {
    const [name, setname] = useState("");
  return (
    <div>
        <h1>onChange event testing</h1>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setname(e.target.value)}/>
        <h2>{name}</h2>
    </div>
  )
}

export default OnChange_Testing