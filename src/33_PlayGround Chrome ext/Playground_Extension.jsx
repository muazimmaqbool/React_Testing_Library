import React, { useState } from 'react'


/*
->Lec #44

->Testing Playground Chrome Extension:
  Its an chrome extension, ist need to install it inside chrome browser,
  Its basically an tool for react testing library, so that you can do testing better

  ->After installing this chrome extension , run your app and inside your app in browser
  right click and the inspect then you will see two arrows >> on top bar click and you will see
  Testing Playground >click on it
  the click on its selector on top left of the testing playground and then when you hover over the
  elements it will show you the role of each ui element an then you can run test cases easily
  -> will show you everything that is inside the element and it will give you suggestion on top
  what will be better to you use with this element for testing it
*/

const Playground_Extension = () => {
    const [count, setcount] = useState(0);
  return (
    <div>
        <h1>Testing Playground Chrome Extension</h1>

        <button onClick={() => setcount((count) => count + 1)}>
        Click to increase: {count}
      </button>
      <h2>Heading 2</h2>
      <h5>Heading 5</h5>
    </div>
  )
}

export default Playground_Extension