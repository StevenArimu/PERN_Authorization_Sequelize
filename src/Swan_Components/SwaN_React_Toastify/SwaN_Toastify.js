import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const toastify = {
  success: (msg, optionsOverride) => {
    toast.success(msg, { ...options, ...optionsOverride });
  },
  error: (msg, optionsOverride) => {
    toast.error(msg, { ...options, ...optionsOverride });
  },
  info: (msg, optionsOverride) => {
    toast.info(msg, { ...options, ...optionsOverride });
  },
  warning: (msg, optionsOverride) => {
    toast.warning(msg, { ...options, ...optionsOverride });
  },
};

export default toastify;

// Example usage:
// toastify.success("Success message");
// toastify.error("Error message");
// toastify.info("Info message");
// toastify.warning("Warning message");
