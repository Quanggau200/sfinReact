import { NavLink } from "react-router-dom";
import logo from'../assets/images/logo.png'
export default function Navigation() {
  const NavItem = [
    // { name: "Home",path:"/" },
    { name: "Dashboard",path:"/dashboard" },
    { name: "Employees" ,path:"/employee"},
    { name: "Attendence" ,path:"/attendence"},
    { name: "Product",path:"/product" },
    { name: "Schedule" ,path:"/schedule"},
    { name: "Messages" ,path:"/message"},

    { name: "Payroll" ,path:"/payroll"},
    { name: "Invoice" ,path:"/invoice"},
    { name: "Setting" ,path:"/setting"},
    { name: "Help & center",path:"/helpandcenter" },
  ];
  return(
    <nav className="header">
        <div>
            <img src={logo} alt="" />
            <h1>Kilutzy</h1>
        </div>
    </nav>
  )
}
