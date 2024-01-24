import { Outlet, Navigate } from "react-router-dom";
const useAuth = () => {
  //getting token from local storage
  const user = localStorage.getItem("token");
  //checking whether token is preset or not
  if (user) {
    return true;
  } else {
    return false;
  }
};

function PublicRoutes() {
  const token = useAuth();
  return token ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoutes;
