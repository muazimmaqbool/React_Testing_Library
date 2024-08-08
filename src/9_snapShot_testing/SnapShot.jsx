import React, { useState } from "react";

/*
->SnapShot Testing: here code of the file is copied in the another file
    -> the copied code is not always in readable mode

  ->snapshot testing copies code of a file and place it in the another folder automatically

  ->Note: When your app/product is in development mode then avoid snapshot testing:

  ->When to use snapshot testing:
    When you application/software is about to go live/launched and you made some minor changes in some files
    (like changing variable names, etc.) and if you made some wrong changes then application won't work in
    production so before making application live do snapshot testing which will tell you that you have made these changes in the end,
    and if you want to keep these changes then update snapshots and if you dont want these changes then remove them.
    Because of this the bugs in your app will be very minimum/ or no bugs at all


*/

const SnapShot = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <h1>Snapshot Testing</h1>
      <button onClick={() => setData("New Data")}>Update Text</button>
      <h1>{data}</h1>
    </div>
  );
};

export default SnapShot;
