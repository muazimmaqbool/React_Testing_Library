import React, { useState } from "react";
/*
->lec #40

-> act function:
 
->use of act function: sometimes we write test case and many times we need to update states
    example(testing an event, onChange etc. here we need to update the state as well with test cases)
    and their might come an issue is that to update the state it takes some time and before that the
    assert function is called in the test case and many times test cases fail and errors occur and to resolve
    these issues we use act function

*/

const ActFunction = () => {
  const [name, setname] = useState("");
  return (
    <div>
      <h1>Act Function</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setname(e.target.value)}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default ActFunction;
