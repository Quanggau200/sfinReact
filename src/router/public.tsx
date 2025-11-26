import { lazy } from "react";
import MainLayout from "../layouts/Mainlayout";
import AuthLayout from "../layouts/Authlayout";

const DashBoard = lazy(() => import('../pages/dashboard'));
const Employee = lazy(() => import('../pages/employee'));
const Attendence = lazy(() => import('../pages/attendence'));
const HelpAndCenter = lazy(() => import('../pages/helpandcenter'));
const Home = lazy(() => import('../pages/home'));
const Invoice = lazy(() => import('../pages/invoice'));
const Project=lazy(() => import('../pages/project'));
const Payroll = lazy(() => import('../pages/payroll'));
const Messages = lazy(() => import('../pages/messages'));
const Schedule = lazy(() => import('../pages/schedule'));
const Setting = lazy(() => import('../pages/setting'));
const Signin = lazy(() => import('../pages/signin'));

export const PublicRouter = [
    {
        element: <MainLayout />,
        children: [
            { path: '/dashboard', element: <DashBoard /> },
            { path: '/employee', element: <Employee /> },
            { path: '/messages', element: <Messages /> },
            { path: '/setting', element: <Setting /> },
            {path:'/project',element: <Project /> },
            { path: '/schedule', element: <Schedule /> },
            { path: '/payroll', element: <Payroll /> },
            { path: '/invoice', element: <Invoice /> },
            { path: '/attendence', element: <Attendence /> },
            { path: '/helpandcenter', element: <HelpAndCenter /> },
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/register', element: <Signin /> },
        ]
    }
]