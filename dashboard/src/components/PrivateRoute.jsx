import { Navigate } from "react-router-dom";
import { getLocalData } from "../utils/accessLocalStorage";

function PrivateRoute({ children }) {
  let token = getLocalData("ecommerce-token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
