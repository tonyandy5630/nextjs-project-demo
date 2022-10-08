import react, { useState } from "react";
import { Stack } from "@mui/material";
import UserTabs from "./UserTabs";

const Users = (props) => {
  const handleDeleteID = (deletedUser) => {
    console.log("im in users");
    // console.log(id);
    props.onDeleteID(deletedUser);
  };
  const allUser = props.users.map((user) => (
    <UserTabs key={user.id} user={user} onDeleteID={handleDeleteID} />
  ));

  return (
    <Stack
      direction='column'
      justifyContent='flex-start'
      spacing={3}
      sx={{
        height: 0.6,
        spacing: "3",
        width: 0.95,
      }}
    >
      {allUser}
      {/* <UserTabs users={props.users} /> */}
    </Stack>
  );
};

export default Users;
