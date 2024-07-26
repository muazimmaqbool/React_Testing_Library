import React, { useState,useEffect } from "react";

/*
lec #35
-> findBy and findAllBy

->When to use findBy query:
  When you load/reload the page, sometimes the ui elements takes some time to load/show
  (usually happens when you get data from API or code is huge).

  So, basically when your elements took some time (say around 3-5 seconds) to load and if you 
  want to test these elements, which take time to load and then test time using "findBy"

*/

const FindBy = () => {

  const [showData, setshowData] = useState();

  //data will be loaded after 1 second
  //basiclaly h2 element will be loaded/displayed after 1 second and we will test it using
  //findBy, checkout test case file
  useEffect(() => {
    setTimeout(() => {
      setshowData(true)
    }, 1000);
  }, []);
  return (
    <div>
      <h1>findBy and findAllBy</h1>
      {
        showData ? <h2>Data Is Loaded</h2>:<h4>No Data Found</h4>
      }
    </div>
  );
};

export default FindBy;
