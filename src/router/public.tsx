
// import React from "react";
import {  lazy } from "react";
import { Outlet } from "react-router-dom";
const DashBoard = lazy(()=>import('../pages/dashboard'));
const Employee=lazy(()=>import('../pages/employee'));
const Attendence = lazy(()=>import('../pages/attendence'));
const HelpAndCenter=lazy(()=>import('../pages/helpandcenter'));
const Home = lazy(()=>import('../pages/home'));
const Invoice=lazy(()=>import('../pages/invoice'));
const Payroll = lazy(()=>import('../pages/payroll'));
const Messages=lazy(()=>import('../pages/messages'));
const Schedule=lazy(()=>import('../pages/schedule'));
const Setting=lazy(()=>import('../pages/setting'));
const Signin=lazy(()=>import('../pages/signin'));
export const  PublicRouter=[
    {
    element:(
       
            <Outlet/>
    ),
    children:[
            { path: '/', element: <Home /> },
            {path: '/register', element: <Signin /> },
            { path: '/dashboard', element: <DashBoard /> },
            { path: '/employee', element: <Employee /> },
            { path: '/messages', element: <Messages /> },
            { path: '/setting', element: <Setting /> },
            { path: '/schedule', element: <Schedule /> },
            { path: '/payroll', element: <Payroll /> },
            { path: '/invoice', element: <Invoice /> },
            { path: '/attendence', element: <Attendence /> },
            { path: '/helpandcenter', element: <HelpAndCenter /> },
    ]
}
]