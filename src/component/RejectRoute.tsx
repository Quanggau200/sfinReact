import {useUser} from "../context/userContext";
import {Navigate, Outlet} from "react-router-dom";

const RejectedRoute = () => {
    const { user } = useUser();

    if (user) return <Navigate to="/dashboard" replace />;

    return <Outlet />;
};
export default RejectedRoute;