import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import Layout from "../components/mdLayout/Layout";

export const ProtectedRoute = () => {
    const { token } = useAuth();
  
    if (!token) {
      return <Navigate to="/login" />;
    }
  
    return (
      <Layout>
        <Outlet />
      </Layout>
    )
  };