import React from 'react'

/*
lec #45 | MSW and HTTP Requests Testing

?NOTE: Mocking means: make dummy of something like making dummy of an API
visit: https://mswjs.io/docs/getting-started
->What is MSW:
    MSW (Mock Service Worker) basically it is used to mock APIs
    React testing library recommends to use MSW (we can mock API with jest also)

    Why we mock API rather than testing with actual API:
        becaus if you call any API during testing it would be expensive to maintain servers etc.
        and tetsing API is bit complex due to different responses of the API
        so its better to use dummy of an API.
    
        so MSW is used to mock API and to test them

        MSW has better features than jset
*/

const MSW = () => {
  return (
    <div>MSW</div>
  )
}

export default MSW