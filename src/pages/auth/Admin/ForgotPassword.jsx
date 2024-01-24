import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import backEnd_API from "../../../config";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
// import Copyright from "./Copyright";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [eMail, setEMail] = useState("");
  const handlSubmit = () => {
    axios
      .post(`${backEnd_API}/users/forgotPassword`, { eMail: eMail })
      .then((res) => {
        console.log(res.data);
        if (res.data.token) {
          navigate(res.data.link);
        }
      })
      .catch((err) => console.log("ERR, Is this OK?"));
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
          forgot Password ......?
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={eMail}
            onChange={(e) => setEMail(e.target.value)}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, textTransform: "initial" }}
            onClick={handlSubmit}
          >
            Send E-Mail
          </Button>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  );
}
