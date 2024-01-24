import * as React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useProSidebar } from "react-pro-sidebar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
export default function Swan_Appbar(props) {
  const { activeMenuItem } = props;
  const curUser = useSelector((store) => store.auth.curUser);
  useEffect(() => {
    console.log(curUser);
  }, [curUser]);
  const { collapseSidebar } = useProSidebar();
  return (
    <AppBar position="sticky" id="12345" style={{ borderRadius: "20px" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            collapseSidebar();
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {activeMenuItem}
        </Typography>
        <Avatar alt="Arimu" variant="rounded" />
        <Button color="inherit" style={{ textTransform: "initial" }}>
          {curUser ? <>{curUser.email}</> : null}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
