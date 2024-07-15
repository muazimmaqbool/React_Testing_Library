import React from "react";

/*
-> getAllByLabelText | Lec #22

-> getAllByLabelText is used to text all the elements with same label text/attributes
  basically its used to test multiple elements at the same time

*/

const GetAllByLabelText = () => {
  return (
    <div>
      <h1>GetAllByLabelText Query</h1>

      <label htmlFor="user-name1">Username</label>
      <input type="text" id="user-name1"  />

      <label htmlFor="user-name2">Username</label>
      <input type="text" id="user-name2" />

      <label htmlFor="user-name3">Username</label>
      <input type="text" id="user-name3" />

    </div>
  );
};

export default GetAllByLabelText;
