import { Navigate } from "react-router-dom";
import { useStore } from "../store";

const PrivateRoute = ({ outlet }) => {
  const user = useStore((state) => state.user);

  return user ? outlet : <Navigate to="/login" />;
};

export default PrivateRoute;
