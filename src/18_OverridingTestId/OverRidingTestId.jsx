import React from 'react'

/*
lec #26
->overriding test id:
->Why need to override test id?
ANS: If an element have already an  unique id attribute then we need to use this id for testing rather than
        giving seperate id for testing

*/

const OverRidingTestId = () => {
  return (
    <div>
        <h1>OverRidingTestId</h1>

        <div element-id="test-div">This Is Inside Div</div>
    </div>
  )
}

export default OverRidingTestId