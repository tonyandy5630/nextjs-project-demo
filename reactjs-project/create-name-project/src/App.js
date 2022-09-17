// import "./App.scss";
import react, { useState } from "react";
import { Container } from "@mui/material";
import Users from "./Components/Users/Users";
import NewUserForm from "./Components/Input/NewUserForm";
import { Stack } from "@mui/material";
import "./App.scss";

let DUMMY_DATA = [
  {
    id: 0,
    username: "Mark",
    age: "30",
  },
  {
    id: 1,
    username: "Bob",
    age: "21",
  },
  {
    id: 2,
    username: "Alan",
    age: "22",
  },
];
console.dir(DUMMY_DATA);
let intID = 4;
function App() {
  const [datas, setNewData] = useState(DUMMY_DATA);

  const addNewUserHandler = (newUser) => {
    setNewData((prevData) => {
      return [{ id: ++intID, ...newUser }, ...prevData];
    });
    console.log(datas);
  };

  const handleDeleteID = (deletedUser) => {
    let deletedIndex = datas.indexOf(deletedUser);
    console.log(deletedIndex);
    // DUMMY_DATA.splice(deletedIndex, 1);
    setNewData((prevData) => {
      prevData.splice(deletedIndex, 1);
      return [...prevData];
    });
    console.log(datas);
  };
  return (
    <Container
      maxWidth='md'
      className='container'
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        justifyContent='space-evenly'
        flexDirection='column'
        alignItems='center'
        sx={{
          height: 0.9,
          width: 0.8,
        }}
      >
        <NewUserForm onAddNewUser={addNewUserHandler} />
        <Users users={datas} onDeleteID={handleDeleteID} />
      </Stack>
    </Container>
  );
}

export default App;
