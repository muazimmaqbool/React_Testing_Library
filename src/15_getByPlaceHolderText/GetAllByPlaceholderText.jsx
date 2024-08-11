import React from 'react'
/*
->getAllByPlaceholderText is used to test multiple elements whose placeholder text
is same

*/
const GetAllByPlaceholderText = () => {
  return (
    <div>
      <h1>GetAllByPlaceHolderText</h1>
      <input type="text" placeholder='Username' defaultValue={"react"}/>
      <input type="text" placeholder='Username' defaultValue={"react"}/>
      <input type="text" placeholder='Username' defaultValue={"react"}/>
    </div>
  )
}

export default GetAllByPlaceholderText