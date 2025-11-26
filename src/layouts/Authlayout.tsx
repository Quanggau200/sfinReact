import {Suspense} from "react";
import {Outlet} from "react-router-dom";

const AuthLayout = () => (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Outlet />
    </Suspense>
);
export default AuthLayout;