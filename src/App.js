import { useState } from "react";
import "./App.css";
import { Display } from "./Components/Display";
import { Form } from "./Components/Form";
import { List } from "./Components/List";

function App() {
  const [userList, setUserList] = useState([]);

  const getNewUserName = (aaa) => {
    setUserList([...userList, aaa]);
  };

  return (
    <div className="">
      <h1>User List</h1>
      <hr />

      <div></div>
      <div>
        <Form getNewUserName={getNewUserName} />
      </div>
      <div>
        <List userList={userList} />
      </div>
    </div>
  );
}

export default App;
