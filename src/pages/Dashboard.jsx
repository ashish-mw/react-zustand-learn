import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { useStore } from "../store";

const Dashboard = () => {
  const user = useStore((state) => state.user);

  return (
    <Layout title="Dashboard">
      <h1>Dashboard page</h1>
      <p>
        This page should only be accessed by a logged in user. Hello {user.name}{" "}
        👋
      </p>

      <p>
        Try visiting <Link to="/login">the login page</Link>. You can't 😈
      </p>
    </Layout>
  );
};

export default Dashboard;
