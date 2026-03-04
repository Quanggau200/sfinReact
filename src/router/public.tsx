import { lazy } from "react";
import MainLayout from "../layouts/Mainlayout";
import AuthLayout from "../layouts/Authlayout";
import ProtectedRoute from "../components/ProtectedRoute";
import RejectedRoute from "../components/RejectRoute";
import { useRouteError } from "react-router-dom";

const DashBoard = lazy(() => import("../pages/dashboard"));
const Employee = lazy(() => import("../pages/Employee/employee"));
const Attendence = lazy(() => import("../pages/attendence"));
const HelpAndCenter = lazy(() => import("../pages/helpandcenter"));
const Home = lazy(() => import("../pages/home"));
const Invoice = lazy(() => import("../pages/invoice"));
const Project = lazy(() => import("../pages/project"));
const Payroll = lazy(() => import("../pages/payroll"));
const Messages = lazy(() => import("../pages/messages"));
const Schedule = lazy(() => import("../pages/schedule"));
const Setting = lazy(() => import("../pages/setting"));
const Signin = lazy(() => import("../pages/signin"));
const DetailEmployee = lazy(() => import("../pages/Employee/detailEmployee"));

//
function RootErrorePage() {
  const error = useRouteError();
  console.log(error);
  return <div>opp! something wrong</div>;
}
export const PublicRouter = [
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            name: "Dashboard",
            path: "/dashboard",
            element: <DashBoard />,
            errorEmlent: <RootErrorePage />,
          },
          {
            name: "Employee",
            path: "/employees",
            element: <Employee />,
            errorEmlent: <RootErrorePage />,
          },
          {
            name: "Detail Employee",
            path: "/employees/detail",
            element: <DetailEmployee />,
            errorElement: <RootErrorePage />,
          },
          {
            name: "Messages",
            path: "/messages",
            element: <Messages />,
            errorEmlent: <RootErrorePage />,
          },
          {
            name: "Setting",
            path: "/setting",
            element: <Setting />,
            errorEmlent: <RootErrorePage />,
          },
          {
            name: "Project",
            path: "/project",
            element: <Project />,
            errorEmlent: <RootErrorePage />,
          },
          {
            name: "Schedule",
            path: "/schedule",
            element: <Schedule />,
            errorEmlent: <RootErrorePage />,
          },
          {
            name: "Payroll",
            path: "/payroll",
            element: <Payroll />,
            errorEmlent: <RootErrorePage />,
          },
          {
            name: "Invoice",
            path: "/invoice",
            element: <Invoice />,
            errorEmlent: <RootErrorePage />,
          },
          {
            name: "Attendence",
            path: "/attendence",
            element: <Attendence />,
            errorEmlent: <RootErrorePage />,
          },
          {
            name: "Help and Center",
            path: "/helpandcenter",
            element: <HelpAndCenter />,
            errorEmlent: <RootErrorePage />,
          },
        ],
      },
    ],
  },
  {
    element: <RejectedRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/register", element: <Signin /> },
        ],
      },
    ],
  },
];
