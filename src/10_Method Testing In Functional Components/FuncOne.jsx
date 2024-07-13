import React, { useState } from 'react'
import handleOtherMethod from './helper';

const FuncOne = () => {
    const [data, setData] = useState();
    const handleData=()=>{
        setData("Hello React")
    }
    /*
    here we will write a test case that will check whether the ui gets the "Hello React" text or not, i.e the testing of function because
    state is getting updated via function and that shows hello react on screen.
     */

    //testing another method which returns text
    /*
    ->NOTE: a method inside functional component which returns something is bit complicated to test unless its inside
    class based component
    ->How to test it now?
        do this -> 1)make a folder (eg helper.js) and put this function which returns something inside the helper file

     */
    // const handleOtherMethod=()=>{
    //     return "Hi user"
    // } //moved inside helper.js file

  return (
    <div>
        <h1>Functional Component Method Testing</h1>
        <button data-testid="btn1" onClick={handleData}>Update Button</button>
        <button onClick={handleOtherMethod}>Print Text</button>
        <h2>{data}</h2>
    </div>
  )
}

export default FuncOne