import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { apiUsers } from "../../../store/reducers/authReducer/actions";
import SwaN_Sidebar from "../../../Swan_Components/SwaN_Sidebar/SwaN_Sidebar";
import Swan_Appbar from "../../../Swan_Components/SwaN_Appbar/Swan_Appbar";
const Admin = () => {
  const user = useSelector((store) => store.auth.curUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiUsers());
  }, [user]);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  return (
    <Box sx={{ width: "100%", display: "flex" }} id="AdminBOx12314432">
      <SwaN_Sidebar
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
      />
      <div style={{ display: "block", width: "100%", margin: "10px" }}>
        <Swan_Appbar activeMenuItem={activeMenuItem} />
        <Outlet />
      </div>
    </Box>
  );
};
export default Admin;
