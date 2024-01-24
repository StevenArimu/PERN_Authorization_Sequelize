import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
// import Copyright from "./Copyright";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const handlSubmit = () => {
    const data = { password: password, confirm: confirm };
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Pasword Setting......?
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Pasword"
            name="Password"
            autoComplete="Password"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            id="Confirm"
            label="Confirm Password"
            name="Confirm"
            autoComplete="Confirm"
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, textTransform: "initial" }}
            onClick={handlSubmit}
          >
            ResetPassword
          </Button>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  );
}
