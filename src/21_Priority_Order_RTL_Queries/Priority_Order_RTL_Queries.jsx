import React from 'react'

//lec #29 is skipped its about getByAltText and getAllByAltText (its not important and used very less)

//lec #30 (important)
//RTL: react testing library queries
/*
->In this part we will see which RTL Queries we should use while testing an element
  either by id, title, role etc

  ->The first priority is given to test an element by role i.e getByRole
  then if role is not present then by label Text i.e getByLabel then > placeholder Text then by> text etc

  see official documentation for react testing library and inside queries section you will see in which order
  they are defined //https://testing-library.com/docs/queries/about 
  ->follow that pattern
*/


const Priority_Order_RTL_Queries = () => {
  return (
    <div>
        <h1>Priority Order For RTL Queries</h1>
        
    </div>
  )
}

export default Priority_Order_RTL_Queries