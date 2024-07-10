import React from "react";

const Input = () => {
  return (
    <div>
      <p>Testing Input Box</p>
      <input
        type="text"
        placeholder="Enter Your Username"
        name="username"
        id="userID"
        value="USER123" 
      />

      <input
        type="checkbox"
        id="checkBoxOne"
      />
    </div>
  );
};

export default Input;
