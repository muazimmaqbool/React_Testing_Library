import React from 'react'

//lec #36
/*
->Test Elements With JavaScript Query / custom query:
    we can test elements with various methods and recommended methods are:
    getBy, queryBy, findBy and if somehow they didn't work then go for custom query or js query

*/

const TestElementsJavascriptQuery = () => {
  return (
    <div>
        <h1>Test Elements Javascript Query</h1>
        <div id='testId' className='testName'>Hello World</div>
    </div>
  )
}

export default TestElementsJavascriptQuery