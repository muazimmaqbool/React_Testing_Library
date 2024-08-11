import React from 'react'

//lect #25
//getByTestId and getAllByTestId are used to test single and multiple elements using the
// the data-testid or testid attribute 
const GetByTestId_GetAllByTestId = () => {
  return (
    <div>
        <h1>GetByTestId and GetAllByTestId</h1>

        <div data-testid="div-test-id">
            Testing with test Id
        </div>

        <h3 data-testid="h3-test-id">Hr tag heading</h3>
        <h3 data-testid="h3-test-id">Hr tag heading</h3>
        <h3 data-testid="h3-test-id">Hr tag heading</h3>

        <button data-testid="btn-test-id">Click Me</button>
        <button data-testid="btn-test-id">Click Me</button>
    </div>
  )
}

export default GetByTestId_GetAllByTestId