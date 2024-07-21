import React from 'react'

// lect #28
//used when you want to test an element on the basis of its title
//? Note: title is seen in the screen when hover over the element in ui

const GetByTitle_GetAllByTitle = () => {
  return (
    <div>
        <h1>GetByTitle and GetAllByTitle</h1>

        <button title='click me button'>Click Me</button>
        <br/>
        <br/>
        <span title='black spade icon'>&#x2660;</span>
        <br/>
        <br/>
        <button title='see more button'>See More</button>
        <button title='see more button'>See More</button>
        <button title='see more button'>See More</button>
    </div>
  )
}

export default GetByTitle_GetAllByTitle