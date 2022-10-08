import react, { useState } from "react";
import styles from "./NewUserForm.module.scss";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

const MyTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#457b9d",
    fontSize: "18px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "3px solid #1d3557", //${!isValid ? "red" : ""}`,
      // backgroundColor:"red",
    },
    "&.Mui-focused fieldset": {
      border: "3px solid #2a9d8f",
    },
  },
});

const NewUserForm = (props) => {
  const [isValidUserName, setIsValidUsername] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);
  const [newUserName, setUserName] = useState("");
  const [warningUserName, setWarningUsername] = useState("");
  const [warningAge, setWarningAge] = useState("");
  const [newAge, setAge] = useState("");

  const handelEnteredUserName = (event) => {
    setUserName(event.target.value);
    if (newUserName.trim().length === 0) {
      setIsValidUsername(false);
    } else {
      setWarningUsername("");
      setIsValidUsername(true);
    }
  };
  const handelEnteredAge = (event) => {
    setAge(event.target.value);
    if (newAge === "") {
      setIsValidAge(false);
    } else {
      setWarningAge("");
      setIsValidAge(true);
    }
  };

  const onAddNewUser = (event) => {
    event.preventDefault();
    if (newUserName.trim().length === 0) {
      setWarningUsername(<Alert severity='error'>This must be filled</Alert>);
      if (newAge === "") {
        setWarningAge(<Alert severity='error'>This must be filled</Alert>);
      }
      return;
    }
    props.onAddNewUser({
      username: newUserName,
      age: newAge,
    });
    setUserName("");
    setAge("");
  };
  return (
    <Stack
      flexDirection='column'
      justifyContent='space-evenly'
      component={"form"}
      sx={{
        height: 0.4,
        bgcolor: "#bde0fe",
        borderRadius: "10px",
        px: 3,
        width: 0.95,
      }}
    >
      <MyTextField
        label='Enter UserName'
        fullWidth
        autoFocus
        variant='outlined'
        color='warning'
        value={newUserName}
        onChange={handelEnteredUserName}
      />
      {warningUserName}
      <MyTextField
        type='number'
        label='Enter Year'
        fullWidth
        autoFocus
        variant='outlined'
        value={newAge}
        onChange={handelEnteredAge}
      />
      {warningAge}
      <Button
        size='small'
        variant='contained'
        sx={{ width: 0.2 }}
        type='submit'
        onClick={onAddNewUser}
      >
        Add
      </Button>
    </Stack>
  );
};
export default NewUserForm;
