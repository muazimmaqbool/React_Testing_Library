import React, { useState } from "react";

const SnapShot = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <h1>Snapshot Testing Example</h1>
      <button onClick={() => setData("New Data")}>Update Text</button>
      <h1>{data}</h1>
    </div>
  );
};

export default SnapShot;
