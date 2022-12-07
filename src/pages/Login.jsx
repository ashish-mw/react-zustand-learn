import { Navigate } from "react-router-dom";

import Layout from "../components/Layout";

import { useStore } from "../store";

const Login = () => {
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);

  const handleClick = () => {
    setUser({
      name: "Drake",
    });
  };

  return user ? (
    <Navigate to="/" />
  ) : (
    <Layout title="Login">
      <h1>Login page</h1>

      <button onClick={handleClick}>Login</button>
    </Layout>
  );
};

export default Login;
