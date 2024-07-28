import React, { useEffect, useState } from "react";

/*
-> lec #46 and #47 | API call Testing

-> API used: https://jsonplaceholder.typicode.com/users

->setps in testing API:
    1) install MSW : npm install msw@latest --save-dev
    2) make Mock Service Folder (with any name example: Mock Services)
    3) Make server file (inside above folder :Mock Services)
    4) maker server handler file (inside above folder :Mock Services)
    5) write code for api testing
    6) call server in test setup file

    ->mock server file and handler file can have any name but prefer ones are: server.js and handlers.js
*/

const API_Testing = () => {
  const [data, setdata] = useState([]);

  const getData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    let response = await result.json();
    setdata(response);
  };
  //console.log(data);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>API Testing</h1>
      <h3>List Of Users</h3>
      <ul> {data && data.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  );
};

export default API_Testing;
