import logo from './logo.svg';
import './App.css';
import ReactFunc from './2_Text_image/ReactFunc';
import Input from './3_Test_INPUT/Input';
import InputFile from "./4_Group_with_describe_functon/InputFile"
import OnChangeTest from './5_Test_onChange/OnChangeTest';
import ClickTest from './6_Click_Event_Test/ClickTest';
import Diff_File_Ext from './7 Different File Extensions/Diff_File_Ext';
import Before_After from './8_Before_Hook/Before_After_hooks';
import SnapShot from './9_snapShot_testing/SnapShot';
import FuncOne from './10_Method Testing In Functional Components/FuncOne';
import GetByRole from './11_getByRole_Query/GetByRole';
import GetByRole_Two from './11_getByRole_Query/GetByRole_Two';
import GetAllByRole from './12_getAllByRole_Query/GetAllByRole';

function App() {
  return (
    <div className="App">
      {/* <ReactFunc/> */}
      {/* <Input/> */}
      {/* <InputFile/> */}
      {/* <OnChangeTest/> */}
      {/* <ClickTest/> */}
      {/* <Diff_File_Ext/> */}
      {/* <Before_After/> */}
      {/* <SnapShot/> */}
      {/* <FuncOne/> */}
      {/* <GetByRole/> */}
      {/* <GetByRole_Two/> */}
      <GetAllByRole/>
    </div>
  );
}

export default App;
