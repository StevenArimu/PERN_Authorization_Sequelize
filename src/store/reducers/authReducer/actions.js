import axios from "axios";
import backEnd_API from "../../../config";
import toastify from "../../../Swan_Components/SwaN_React_Toastify/SwaN_Toastify";
// import browserHistory from "../../../config/history";
export const types = {
  DEL_USER: "DEL_USER",
  SAVE_USER: "SAVE_USER",
  GET_USERS: "GET_USERS",
  ///authorization
  LOG_IN: "LOG_IN",
  REGISTER: "REGISTER",
  LOG_OUT: "LOG_OUT",
  SET_USERS: "SET_USERS",
  UPDATE_USER: "UPDATE_USER",
  ADD_USER: "ADD_USER",
};

export const apiUserRegister = (data, navigate) => (dispatch) => {
  axios
    .post(`${backEnd_API}/users/register`, data)
    .then((res) => {
      console.log(res.data);
      toastify.success(res.data.message);
      dispatch({ type: types.REGISTER, payload: res.data.user });
      navigate("/admin");
    })
    .catch((err) => console.log(err));
};

export const apiUserLogin = (data, navigate) => (dispatch) => {
  axios
    .post(`${backEnd_API}/auth/login`, data)
    .then((res) => {
      toastify.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: types.LOG_IN, payload: res.data.user });
      navigate("/admin");
    })
    .catch((err) => console.log(err));
};
export const apiUserLogout = (data) => (dispatch) => {
  localStorage.removeItem("token");
  toastify.success("logout successfully");
  dispatch({ type: types.LOG_OUT, payload: null });
};
export const apiUsers = () => (dispatch) => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios
    .get(`${backEnd_API}/users`)
    .then((res) => {
      dispatch({ type: types.SET_USERS, payload: res.data.users });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const apiDelUser = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios
    .post(`${backEnd_API}/users/destoryUser`, data)
    .then((res) => {
      toastify.success(res.data.msg);
      console.log(res.data);
      dispatch({ type: types.DEL_USER, payload: res.data.user.user_id });
    })
    .catch((err) => console.log(err));
};
export const apiAddUser = (data) => (dispatch) => {
  axios
    .post(`${backEnd_API}/users/register`, data)
    .then((res) => {
      toastify.success(res.data.msg);
      dispatch({ type: types.ADD_USER, payload: res.data.user });
    })
    .catch((error) => {
      console.log("ERR");
      // toastify.warning(error.response.data.errorMsg);
    });
};
export const apiUpdateUser = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios
    .put(`${backEnd_API}/users/updateUser`, data)
    .then((res) => {
      toastify.success(res.data.message);
      console.log(res.data);
      dispatch({ type: types.UPDATE_USER, payload: res.data.user });
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
