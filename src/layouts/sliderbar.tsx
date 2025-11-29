import logo from "../assets/images/logo.png";
import {useState} from "react";
import {FaUser} from "react-icons/fa";
import Path from "../assets/images/Path.svg";
import Messages from "../assets/images/Messages.svg";
import Payroll from "../assets/images/Payroll.svg";
import Invoice from "../assets/images/Invoice.svg";
import Logout from "../assets/images/Logout.svg";
import Help from "../assets/images/Help.svg";
import Setting from "../assets/images/Setting.svg";
import Project from "../assets/images/Project.svg";
import Schedule from "../assets/images/Schedule.svg";
import Attendence from "../assets/images/Attendence.svg";
import Employee from "../assets/images/Employee.svg";
import {useNavigate} from "react-router-dom";
import price from "../assets/images/Price.svg";
import "./sliderbar.css";
import {useUser} from "../context/userContext";
import {NavLink} from "react-router-dom";
type MenuItem = {
    id: string;
    title: string;
    icon: string;
    path?: string;
    badge?: number;
};

export default function SliderBar() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const {user} = useUser();
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const mainMenuItem = [
        {id: "Dashboard", title: "Dashboard", icon: Path, path: "/dashboard"},
        {id: "Employee", title: "Employee", icon: Employee, path: "/employees"},
        {id: "Attendence", title: "Attendence", icon: Attendence, path: "/attendence"},
        {id: "Project", title: "Project", icon: Project, path: "/project"},
        {id: "Schedule", title: "Schedule", icon: Schedule, path: "/schedule"},
        {id: "Messages", title: "Messages", icon: Messages, badge: 1, path: "/messages"},
        {id: "Payroll", title: "Payroll", icon: Payroll, path: "/payroll"},
        {id: "Invoice", title: "Invoice", icon: Invoice, path: "/invoice"},
    ];

    const ortherMenuItem = [
        {id: "Setting", title: "Setting", icon: Setting, path: "/setting"},
        {id: "Help & center ", title: "Help", icon: Help, path: "/helpandcenter"},
        {id: "Logout", title: "Logout", icon: Logout}
    ];

    const handleMenuClick = (item: MenuItem) => {
        setActiveMenu(item.id);
        if (item.path) navigate(item.path);
    };
    return (
        <div
            className={`custom-scroll smooth-scroll h-screen bg-gray-100 flex flex-col overflow-y-auto border-r border-gray-200 transition-all duration-300 ease-in-out ${
                isCollapsed ? "w-20" : "w-64"
            }`}
        >
            {/* Header - Logo & Toggle Button */}
            <div
                className={`p-3 flex items-center ${isCollapsed ? 'justify-center flex-col gap-4' : 'justify-between'}`}>
                <div
                    className={`flex items-center gap-2 transition-opacity duration-200 ${isCollapsed ? 'hidden' : 'opacity-100'}`}>
                    <img src={logo} alt="Logo" className="w-8 h-8"/>
                    <span className="font-semibold text-gray-800 whitespace-nowrap">Kilutzy</span>
                </div>

                {isCollapsed && <img src={logo} alt="Logo" className="w-8 h-8 mb-2"/>}

                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-500 transition-colors"
                >
                    {isCollapsed ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
                        </svg>
                    ) : (
                        // Icon menu hoặc mũi tên sang trái (Thu vào)
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    )}
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-3 mt-4">
                {/* Main Menu */}
                <div className="mb-3">
                    {/* 3. Ẩn tiêu đề section khi thu nhỏ */}
                    {!isCollapsed && (
                        <p className="text-xs font-semibold text-gray-500 px-3 mb-3 whitespace-nowrap transition-opacity duration-300">
                            Main
                        </p>
                    )}

                    <nav className="space-y-1">
                        {mainMenuItem.map((item) => {
                            const isActive = activeMenu === item.id;
                            return (
                                <NavLink
                                    key={item.id}
                                    to={item.path}
                                    onClick={() => handleMenuClick(item)}
                                    title={isCollapsed ? item.title : ""} // Tooltip khi thu nhỏ
                                    className={({isActive})=>
                                    `w-full flex items-center px-3 py-2.5 rounded-lg transition-all group relative ${ isActive ?"bg-white text-black shadow-sm" : "text-gray-600 hover:bg-gray-200"}
                                    ${isCollapsed ? "justify-center" : "gap-3"}`}
                                >
                                    <img src={item.icon} alt={item.title} className="w-5 h-5 flex-shrink-0"/>

                                    {/* Text menu: Ẩn đi khi collapsed */}
                                    {!isCollapsed && (
                                        <span
                                            className="flex-1 text-sm font-normal text-left whitespace-nowrap overflow-hidden">
                        {item.title}
                    </span>
                                    )}

                                    {/* Badge (Số thông báo) */}
                                    {item.badge && (
                                        isCollapsed ? (
                                            <div
                                                className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                                        ) : (
                                            <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
                            {item.badge}
                        </span>
                                        )
                                    )}
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>

                {/* Other Menu */}
                <div className="mt-6">
                    {!isCollapsed && (
                        <p className="text-xs font-semibold text-gray-500 px-3 mb-3 whitespace-nowrap">Other</p>
                    )}
                    <nav className="space-y-1">
                        {ortherMenuItem.map((item) => {
                            const isActive = activeMenu === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleMenuClick(item)}
                                    title={isCollapsed ? item.title : ""}
                                    className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-all
                    ${isActive ? "bg-white text-black shadow-sm" : "text-gray-600 hover:bg-gray-200"}
                    ${isCollapsed ? "justify-center" : "gap-3"}
                  `}
                                >
                                    <img src={item.icon} alt={item.title} className="w-5 h-5 flex-shrink-0"/>
                                    {!isCollapsed && (
                                        <span
                                            className="flex-1 text-sm font-normal text-left whitespace-nowrap overflow-hidden">
                        {item.title}
                    </span>
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Trial Plan Card - Chỉ hiện khi mở rộng vì nó chiếm nhiều diện tích */}
            {!isCollapsed && (
                <div className="px-3 py-4 space-y-4 transition-opacity duration-300">
                    <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                        <div className="flex flex-col gap-2 mb-3">
                            <img src={price} alt="Price" className="w-10 h-10"/>
                            <span className="font-semibold text-gray-800 text-sm">Trial plan</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">
                            There are 12 days left for you to enjoy the various features.
                        </p>
                        <button
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                            Upgrade plan
                        </button>
                    </div>
                    {user ? (

                    <button
                        className=" p-3 w-full bg-white border border-gray-100 rounded-2xl flex items-center gap-3 hover:opacity-80 transition-all"
                    >
                        <FaUser size={30} color="blue"/>
                        <div className="flex-1 text-left">
                            <p className="font-medium text-sm text-gray-800">{user.username}</p>
                            <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                    </button>
                    ):(
                    <div className="flex flex-col gap-2 mb-3">
                <div>akjdsk</div>
                    </div>
                    )}
                </div>
            )}

            {/* Icon phiên bản thu gọn của Trial plan (Option) */}
            {isCollapsed && (
                <div className="p-3 flex justify-center pb-6">
                    <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 border border-gray-200"
                            title="Upgrade Plan">
                        <img src={price} alt="Price" className="w-6 h-6"/>
                    </button>
                </div>
            )}
        </div>
    );
}