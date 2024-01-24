import { Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import { Home } from "./pages/home/Home";
import { Outlet } from "react-router-dom";
import LogIn from "./pages/auth/LogIn";
import UsersList from "./pages/auth/Admin/UsersList";
import Admin from "./pages/auth/Admin/Admin";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./pages/auth/Admin/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/Admin/ResetPassword.jsx";
import { Grid } from "@mui/material";

function App() {
  return (
    <div>
      <ToastContainer />
      <Grid xs={12} item>
        <Routes>
          {/* //Public Route */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/logIn" element={<LogIn />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route
            path="http://localhost:4000/api/users/resetPassword/:id/:token"
            element={<ResetPassword />}
          ></Route>

          {/* Private ROute */}
          <Route path="/admin" element={<Admin />}>
            <Route path="users" element={<UsersList />}></Route>
            <Route path="carousel" element={<UsersList />}></Route>
          </Route>
          {/* <div>{AdminRouting}</div> */}
        </Routes>
      </Grid>

      <Outlet />
    </div>
  );
}

export default App;
