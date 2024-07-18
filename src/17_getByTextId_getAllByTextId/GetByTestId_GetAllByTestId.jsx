import React from 'react'

//lect #25
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
    </div>
  )
}

export default GetByTestId_GetAllByTestId