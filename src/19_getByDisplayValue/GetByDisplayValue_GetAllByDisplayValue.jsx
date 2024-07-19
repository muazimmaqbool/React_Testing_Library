import React from 'react'

//lec #27
//use getByDisplayValue and getAllByDisplayValue when you want to do testing of the element on the basis of
// of its value

const GetByDisplayValue_GetAllByDisplayValue = () => {
  return (
    <div>
        <h1>GetByDisplayValue and GetAllByDisplayValue</h1>

        {/*testing single element on the basis of display value */}
        {/*will be tested based on the default value */}
        <input type='text' defaultValue={"Javascript"}/>
        <br/>
        <br/>
        <textarea defaultValue={"React Testing library examples"}/>
    </div>
  )
}

export default GetByDisplayValue_GetAllByDisplayValue