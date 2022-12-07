import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <h1>Dashboard page</h1>
      <p>This page should only be accessed by a logged in user</p>
    </Layout>
  );
};

export default Dashboard;
