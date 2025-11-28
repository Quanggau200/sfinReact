import {useUser} from "../context/userContext";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute =()=>{
    const {user,loading}=useUser();
    if(loading) return <div>Loading...</div>
    if (!user) return <Navigate to="/" replace />;
    return <Outlet/>
}
export default ProtectedRoute;