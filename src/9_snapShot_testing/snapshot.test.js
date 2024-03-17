import { render } from "@testing-library/react";
import SnapShot from "./SnapShot";

test("Snapshot example",()=>{
    const {container}=render(<SnapShot/>);
    expect(container).toMatchSnapshot();
})

/*when this code is run: it will create a snapshot folder and in logs it will say 1 snapshot written:
 and inside that file it will contain a file with name : filename.test.js.snap, 
*/

//watch at(6:00)
//now after make this snapshot file, if you make any in filde (SnapShot.jsx)(change any text their) and run the app
//it will show you 1 snapshot test case failed, it will show initial their was this text persent now its this text present,
//and if you made this change by yourself then press "u" and it will update the snapshot file and if you made this change by mistake then undo the changes 
//in the file

//so by pressing "u" it will update the snapshot file with resent changes and will not fail the test case again.
//or instead of pressing "u" just delete the snapshot file and folder and when you run again it will run perfectly - but this is wrong method

