import { Paper } from "@mui/material";

const UserTabs = (props) => {
  const handleDeleteName = (event) => {
    props.onDeleteID(props.user);
  };
  return (
    <Paper
      elevation={4}
      onClick={handleDeleteName}
      sx={{
        display: "flex",
        alignItems: "center",
        height: 0.1,
        p: 0,
        color: "black",
        bgcolor: "#a8dadc",
      }}
    >
      {`${props.user.username} ${props.user.age} years old`}
    </Paper>
  );
};

export default UserTabs;
