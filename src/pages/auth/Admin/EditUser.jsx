import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  apiAddUser,
  apiUpdateUser,
  // AddUser,
} from "../../../store/reducers/authReducer/actions";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const EditUser = (props) => {
  const {
    addRef,
    editRef,
    isEditing,
    setIsEditing,
    password,
    l_name,
    f_name,
    email,
    setFName,
    setLName,
    setEMail,
    setPassword,
  } = props;
  const users = useSelector((store) => store.auth.users);

  const dispatch = useDispatch();

  const handleAddUser = () => {
    if (addRef.current) {
      addRef.current.scrollIntoView({ behavior: "smooth" });
    }
    const addData = {
      f_name,
      l_name,
      email,
      password,
    };
    dispatch(apiAddUser(addData));
  };
  const handleSaveUser = () => {
    const id = users.filter((user, index) => index === isEditing)[0].user_id;
    dispatch(
      apiUpdateUser({
        f_name,
        l_name,
        email,
        id,
      })
    );
    setFName("");
    setLName("");
    setEMail("");
    setPassword("");
    setIsEditing(0);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const addData = {
        f_name,
        l_name,
        email,
        password,
      };
      dispatch(apiAddUser(addData));
      if (addRef.current) {
        addRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div
      ref={editRef}
      className="edituser"
      style={{ display: "flex", alignItems: "center" }}
    >
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        style={{ margin: "5px" }}
        value={f_name}
        onKeyUp={(e) => handleKeyPress(e)}
        onChange={(e) => setFName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        style={{ margin: "5px" }}
        variant="outlined"
        value={l_name}
        onKeyUp={(e) => handleKeyPress(e)}
        onChange={(e) => setLName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="E-mail"
        style={{ margin: "5px" }}
        variant="outlined"
        value={email}
        onKeyUp={(e) => handleKeyPress(e)}
        onChange={(e) => setEMail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="password"
        style={{ margin: "5px" }}
        variant="outlined"
        value={password}
        onKeyUp={(e) => handleKeyPress(e)}
        onChange={(e) => setPassword(e.target.value)}
      />
      <IconButton onClick={handleSaveUser}>
        <SaveAsIcon style={{ fontSize: "32px" }} />
      </IconButton>
      <IconButton onClick={handleAddUser}>
        <GroupAddIcon style={{ fontSize: "32px" }} />
      </IconButton>
    </div>
  );
};

export default EditUser;
