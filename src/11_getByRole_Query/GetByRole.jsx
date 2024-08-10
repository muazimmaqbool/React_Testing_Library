import React from 'react'

/*
->getByRole Query | lec #18 | https://testing-library.com/docs/queries/byrole

->getByRole: 
    - getByRole comes under getBy type which is used to find a single element
      (getByAll is used to find all elements)
    - getByRole is mostly used to test semantic tags/elements 
    (also used to test non-semantic tags but mostly semantic tags)
    - 
*/

const GetByRole = () => {
  return (
    <div>
        <h1>getByRole Query</h1>
        <input type='text' defaultValue="hello"/>
        <button>Click Me</button>
    </div>
    
  )
}

export default GetByRole

/*
->What are semantic elements/tags?
    ANS: Semantic elements are those elements which by their name/syntax tells the browser and
     the user about what they do or what is their job
         example: bold, italic, button, header, footer, table, border, etc
         non-semantic elements: p, div, span, 
*/