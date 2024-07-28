import React from 'react'

/*
->lec #42

->Functional Props Testing and mocking:
    Whenever we pass data to the component via props. And inside props the data could be of any type,
    it could be: string, boolean, number, object, array and even functions.
    And if we pass functional data via props then we need to test it and how to do that we will see in this
    example:
 
    ->Function Mocking: whenever we do testing of functions we also need to do mocking of functions

    ->In This exmaple we will add click event to the component and add props and these props will contains
    functions

*/

const FunctionPropsTesting = (props) => {
  return (
    <div>
        <h1>>Functional Props Testing and mocking</h1>
        <button onClick={props.testFunction}>Click Me</button>
    </div>
  )
}

export default FunctionPropsTesting