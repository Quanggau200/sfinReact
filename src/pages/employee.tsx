import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";
import "./employee.css"
export default function Employee()
{
    const {setTitle} = usePageTitle();
    useEffect(()=>{
        setTitle(['Employee']);
    },[])
        const employees = [
            {
                id: "23124324023",
                name: "James Wilson",
                phone: "(303) 849-2651",
                role: "Network Engineer",
                email: "c.a.glasser@outlook.com",
                salary: "$4,944.70",
                status: "Full-time",
                avatar: "https://i.pravatar.cc/150?u=1",
            },
            {
                id: "78124398012",
                name: "Andrew Scott",
                phone: "(503) 714-9086",
                role: "Data Scientist",
                email: "david291@gmail.com",
                salary: "$4,944.70",
                status: "Part-time",
                avatar: "https://i.pravatar.cc/150?u=2",
            },
            {
                id: "75123984762",
                name: "Emma Robinson",
                phone: "(503) 714-9086",
                role: "Network Engineer",
                email: "k.p.allen@aol.com",
                salary: "$4,944.70",
                status: "Full-time",
                avatar: "https://i.pravatar.cc/150?u=3",
            },
            {
                id: "39124857392",
                name: "Christopher Hall",
                phone: "(415) 823-6754",
                role: "Network Admin",
                email: "c_j_mccoy@gmail.com",
                salary: "$4,944.70",
                status: "Internship",
                avatar: "https://i.pravatar.cc/150?u=4",
            },
            {
                id: "61234895321",
                name: "Laura King",
                phone: "(210) 903-5164",
                role: "Data Scientist",
                email: "katie63@aol.com",
                salary: "$4,944.70",
                status: "Part-time",
                avatar: "https://i.pravatar.cc/150?u=5",
            },
            // ... bạn có thể thêm nhiều dữ liệu hơn ở đây
        ];
    const getStatusStyle = (status) => {
        switch (status) {
            case "Full-time":
                return " text-green-700 border border-[#E8E8E9]";
            case "Part-time":
                return " text-orange-700 border border-[#E8E8E9]";
            case "Internship":
                return " text-blue-700 border border-[#E8E8E9]";
        }
    };
    return (
        <div className="p-6 bg-white min-h-screen font-sans">
            <div className="main">
                {/* Header Title */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 ">
                    {/* Tabs */}
                    <div className="bg-gray-100 rounded-xl" >
                      <div className="flex gap-0.5 py-0.5">
                          <button className="status px-4 py-1.5 ms-0.5 bg-white text-sm  text-gray-800 shadow-sm leading-6">All</button>
                          <button className="status px-4 py-1.5 text-sm  text-gray-500 hover:text-gray-700 leading-6">Full-time</button>
                          <button className="status px-4 py-1.5 text-sm  text-gray-500 hover:text-gray-700 leading-6">Part-time</button>
                          <button className="status px-4 py-1.5 text-sm text-gray-500 hover:text-gray-700 leading-6">Internship</button>
                      </div>
                    </div>


                    {/* Actions: Search & Buttons */}
                    <div className="flex items-center gap-2 w-full sm:w-auto ">
                        <div className=" input_sreach relative group">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search..."
                                className=" export w-50 pl-10  py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <button className=" export flex items-center gap-2 leading-5 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Export
                        </button>

                        <button className=" export flex items-center gap-2 px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl  hover:bg-gray-50 transition-colors">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Employee
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-5">
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="bg-gray-50 ">
                                <th className="w-[40px] h-[40px] text-center align-middle border-r border-gray-200">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                    />
                                </th>
                                <th className="py-2 px-3 text-gray-500 font-normal border-r border-gray-200">Full name</th>
                                <th className="py-2 px-3 text-gray-500 font-normal border-r border-gray-200">Employee ID</th>
                                <th className="py-2 px-3 text-gray-500 font-normal border-r border-gray-200">Number phone</th>
                                <th className="py-2 px-3 text-gray-500 font-normal border-r border-gray-200">Role</th>
                                <th className="py-2 px-3 text-gray-500 font-normal border-r border-gray-200">Email</th>
                                <th className="py-2 px-3 text-gray-500 font-normal border-r border-gray-200">Salary</th>
                                <th className="py-2 px-3 text-gray-500 font-normal border-r border-gray-200">Status</th>
                                <th className="py-2 px-3 text-gray-500 font-normal border-r border-gray-200 "></th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                            {employees.map((employee, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors group border-r border-gray-200">
                                    <td className=" text-center align-middle border-r border-gray-200 ">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="border-r border-gray-200">
                                        <div className="flex items-center gap-2.5">
                                            <img src={employee.avatar} alt={employee.name} className="w-6 h-6 rounded-full object-cover" />
                                            <span className=" text-sm font-medium text-gray-900">{employee.name}</span>
                                        </div>
                                    </td>
                                    <td className=" border-r border-gray-200 text-sm text-gray-600 font-mono ">{employee.id}</td>
                                    <td className="  border-r border-gray-200 text-sm text-gray-600">{employee.phone}</td>
                                    <td className="  border-r border-gray-200 text-sm text-gray-900">{employee.role}</td>
                                    <td className=" border-r border-gray-200 text-sm text-gray-600">{employee.email}</td>
                                    <td className="border-r border-gray-200 text-sm font-medium text-gray-900">{employee.salary}</td>
                                    <td className="border-r border-gray-200 ">
                      <span className={`status_text inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium border ${getStatusStyle(employee.status)}`}>
                        <span
                            className={`w-1.5 h-1.5 rounded-full ${
                                employee.status === "Full-time"
                                    ? "bg-red-500"
                                    : employee.status === "Part-time"
                                        ? "bg-orange-500"
                                        : "bg-blue-500"
                            }`}
                        ></span>
                          {employee.status}
                      </span>
                                    </td>
                                    <td className="text-center action">
                                        <button className="  text-  -400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 border border-gray-300">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer / Pagination */}
                    <div className="p-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-black">
              Page <span className="text-black ">1</span> of <span className="text-black ">90</span>
            </span>
                        <div className="flex items-center gap-2.5">
                            <button className="previous border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>

                           <div className="flex bg-gray-100 rounded-md gap-0.5" >
                               <button className="w-7 h-7 number rounded-md flex items-center justify-center text-sm font-medium bg-white text-gray-900 rounded border border-gray-200">1</button>
                               <button className="w-7 h-7 number rounded-md flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-white rounded">2</button>
                               <button className="w-7 h-7 number rounded-md flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-white rounded">3</button>
                               <span className="w-7 h-7 number rounded-md flex items-center justify-center text-sm text-gray-400">...</span>
                               <button className="w-7 h-7 number rounded-md flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-white rounded">90</button>

                           </div>
                            <button className="previous border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}