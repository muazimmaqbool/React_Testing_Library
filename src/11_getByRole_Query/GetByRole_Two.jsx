import React from 'react'

/*
lec #19
herw we will see:
-> how to handle multiple elements with getByRole
-> how to apply custom role on the element and how to handle that

*/

const GetByRole_Two = () => {
  return (
    <div>
        <h1>multiple elements with Role</h1>

        <button>BTN ONE</button>
        <button>BTN TWO</button>

        {/*using this will be hard for multiple input box testing so we use label */}
        {/* <input type='text'/>
        <input type='text'/> */}
        <label htmlFor='input1'>User Name:</label>
        <input type='text' id='input1'/>
        <label htmlFor='input2'>Email:</label>
        <input type='text' id='input2'/>

        {/*testing non-semantic element /custom element role testing on this */}
        {/*to test it need to add role to it */}
        {/* <div>Dummy Text</div>: can't be tested like this need to add role attribute */}
        {/*this is know as custom role */}
        <div role='extraInfo'>Dummy Text</div>

    </div>
  )
}

export default GetByRole_Two