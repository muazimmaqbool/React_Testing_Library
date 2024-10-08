import React from 'react'

//lec #27
//use getByDisplayValue and getAllByDisplayValue when you want to do testing of the element on the basis of
// of its value that has been displayed on the ui
//this checks basically default values of the elements

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
        <br/>
        <br/>
        <input type='radio' defaultValue={"MALE"}/>
        <br/>
        <br/>
        
        {/*testing single element on the basis of display value */}
        <input type='text' defaultValue="react"/>
        <input type='text' defaultValue="react"/>
        <input type='text' defaultValue="react"/>
        <input type='text' defaultValue="react"/>

    </div>
  )
}

export default GetByDisplayValue_GetAllByDisplayValue