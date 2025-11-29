import {lazy} from "react";
import MainLayout from "../layouts/Mainlayout";
import AuthLayout from "../layouts/Authlayout";
import ProtectedRoute from "../component/ProtectedRoute";
import RejectedRoute from "../component/RejectRoute";
import {useRouteError} from "react-router-dom";

const DashBoard = lazy(() => import('../pages/dashboard'));
const Employee = lazy(() => import('../pages/Employee/employee'));
const Attendence = lazy(() => import('../pages/attendence'));
const HelpAndCenter = lazy(() => import('../pages/helpandcenter'));
const Home = lazy(() => import('../pages/home'));
const Invoice = lazy(() => import('../pages/invoice'));
const Project = lazy(() => import('../pages/project'));
const Payroll = lazy(() => import('../pages/payroll'));
const Messages = lazy(() => import('../pages/messages'));
const Schedule = lazy(() => import('../pages/schedule'));
const Setting = lazy(() => import('../pages/setting'));
const Signin = lazy(() => import('../pages/signin'));
const DetailEmployee = lazy(() => import('../pages/Employee/detailEmployee'))

//
function RootErrorePage() {
    const error = useRouteError();
    console.log(error);
    return (
        <div>opp! something wrong</div>
    )
}
export const PublicRouter = [
    {
       element: <ProtectedRoute/>,
        children: [
            {
                element:(
                    <MainLayout/>
                ),
                children: [
                    { path: '/dashboard', element: <DashBoard />,errorEmlent:<RootErrorePage/> },
                    { path: '/employees', element: <Employee />,errorEmlent:<RootErrorePage/>  },
                    {
                        path: '/employees/detail',
                        element: <DetailEmployee />,
                        errorElement: <RootErrorePage/>
                    },
                    { path: '/messages', element: <Messages />,errorEmlent:<RootErrorePage/>  },
                    { path: '/setting', element: <Setting /> ,errorEmlent:<RootErrorePage/> },
                    {path:'/project',element: <Project /> },
                    { path: '/schedule', element: <Schedule /> },
                    { path: '/payroll', element: <Payroll /> },
                    { path: '/invoice', element: <Invoice /> },
                    { path: '/attendence', element: <Attendence /> },
                    { path: '/helpandcenter', element: <HelpAndCenter /> },
                ]
            }
        ]
    },
    {
        element:<RejectedRoute/>,
        children: [
            {
                element: <AuthLayout/>,
                children: [
                    {path: '/', element: <Home/>},
                    {path: '/register', element: <Signin/>},

                ]
            }
        ]
    }
]