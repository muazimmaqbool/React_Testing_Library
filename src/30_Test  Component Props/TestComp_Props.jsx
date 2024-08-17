import React from 'react'
import User from './User'

/*
-> Lec #41
-> Test Component Props:
 Here in this example to see properly the testing of props we created another file called Users.js
 and we will do testing on this file in the test case file.
*/

const TestComp_Props = () => {
  return (
    <div>
        <h1>Test Component Props</h1>
        <User name="Muazim"/>
    </div>
  )
}

export default TestComp_Props