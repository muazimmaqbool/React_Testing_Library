import React from "react";

//lec #34
/*
->queryBy and queryAllBy

-> Earlier we checked the getBy Query And it was almost 10 methods that we checked: getByText,getById etc...
-> Now we will check the queryBy query and it has almost same 10 methods like:
        queryByText, queryById, etc...
    Note: will will not go through all of these we see basic rest will be same

->Why we use queryBy:
    ANS: queryBy has an extra feature which getBy don't have is that if your element is hidden
         in the ui, still you can test that element using queryBy.

-> In our button example we will display Login and Logout buttons but one at a time and hide other
  if we display login button we will hide logout button and vice versa
*/

//if you want to test single element which is hidden use queryBy and if you want to test
// multiple elements use queryAllBy

//if you test the hidden element will getBy it will fail

const QueryBy_QueryAllBy = () => {
  //when login is true Logout button will be display and when false Login button will be displayed
  let login = false;
  return (
    <div>
      <h1>queryBy and queryAllBy</h1>

      {login ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
};

export default QueryBy_QueryAllBy;
