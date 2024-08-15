import React from 'react'

/*
-> Lec #37
->Querying Within Elements:
    used when you want to test children elements with parents element
    example : you want to test some p tags which are inside div tag(parent element)

    here in our code we want to test that inside div with text "Hello world" should have p element with
    text "Child Tag"

    for this we use querying Within Elements: what it will do is that inside an element
    should have a specific text/element
*/
const QueryingWithinElements = () => {
  return (
    <div>
        <h1>Querying Within Elements</h1>

        <div>Hello World
            <p>Hi</p>
            <p>Hello</p>
            <p>Hey</p>
        </div>
    </div>
  )
}

export default QueryingWithinElements