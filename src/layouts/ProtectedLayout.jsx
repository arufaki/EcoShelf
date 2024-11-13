import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProtectedLayout = () => {
    const { user } = useAppContext();
    return user == null ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedLayout;
