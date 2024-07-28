import React, { useState } from "react";

/*
->Lec #43

 visit: https://testing-library.com/docs/dom-testing-library/api-debugging
 
->Debugging in React testing Library:
    Suppose if you write an test case with react testing library and you face some problems/issues, your test case is failing,
    and the process of resolving the issue/errors is called debugging
    (Debugging is the process of finding out solutions or fixing erros/bugs/issues)

    Types:
        ->Automatic Debugging: when test cases fails it runs on its own(automatically)
        ->prettyDOM
        ->debug
        ->DEBUG_PRINT_LIMIT=10000 npm test
        ->logRoles
*/
/*
->Automatic Debugging: whenever our test case fails and what every message we see in the console is "Automatic Debugging"

->prettyDOM: used to see/print the html/jsx part of your code in the console

-> debug functon: also prints html/jsx part of your code in the console

->DEBUG_PRINT_LIMIT=10000 npm test: sometimes our code is huge like 1000+ lines and 1500+ lines and to
    print all the code in the console. in that case we use this: DEBUG_PRINT_LIMIT=10000 npm test
    i.e it increases the limit of lines to be printed on the console, by default limit is 7000 lines
    to apply this: write this in console: DEBUG_PRINT_LIMIT=10000 npm test , limit is upto you what ever you want to set

->logRoles: what it will do is that after each element it gives you the roles by which you can identify each element`
        in console you will see after each element is a line so that you can easily identify them

*/

const Debugging = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>Debugging in React testing Library</h1>

      <button onClick={() => setcount((count) => count + 1)}>
        Click to increase: {count}
      </button>
      <h2>Heading 2</h2>
      <h5>Heading 5</h5>
    </div>
  );
};

export default Debugging;
