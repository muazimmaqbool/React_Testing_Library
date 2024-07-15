import React from 'react'

/*
 getByLabelText | Lec #21

 ->here we will access the element by its label and test it

*/

const GetByLabelText = () => {
  return (
    <div>
        <h1>GetByLabelText Query</h1>

        {/*the value of "htmlFor" if it matches with the id of an element then this label 
        will be attached to that element automatically */}
        <label htmlFor='user-name'>Username</label>
        <input type="text" id='user-name' defaultValue={"React"}/>


        <label htmlFor='payment'>Payment Done</label>
        <input type="checkbox" id='payment'/>

    </div>
  )
}

export default GetByLabelText