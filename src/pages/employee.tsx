import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";

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
                return "bg-green-100 text-green-700 border-green-200";
            case "Part-time":
                return "bg-orange-100 text-orange-700 border-orange-200";
            case "Internship":
                return "bg-blue-100 text-blue-700 border-blue-200";
            default:
                return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };
    return (
        <div className="p-6 bg-gray-50 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Title */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-100">
                    {/* Tabs */}
                    <div className="flex bg-gray-100 py-0.5 rounded-lg">
                        <button className="px-4 py-1.5 bg-white text-sm  text-gray-800 rounded shadow-sm leading-6">All</button>
                        <button className="px-4 py-1.5 text-sm  text-gray-500 hover:text-gray-700 leading-6">Full-time</button>
                        <button className="px-4 py-1.5 text-sm  text-gray-500 hover:text-gray-700 leading-6">Part-time</button>
                        <button className="px-4 py-1.5 text-sm text-gray-500 hover:text-gray-700 leading-6">Internship</button>
                    </div>


                    {/* Actions: Search & Buttons */}
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative group">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-fit pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Export
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Employee
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="p-4 w-4">
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                </th>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Full name</th>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Number phone</th>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
                                <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="p-4 w-10"></th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                            {employees.map((employee, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors group">
                                    <td className="p-4">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img src={employee.avatar} alt={employee.name} className="w-8 h-8 rounded-full object-cover" />
                                            <span className="text-sm font-medium text-gray-900">{employee.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600 font-mono ">{employee.id}</td>
                                    <td className="p-4 text-sm text-gray-600">{employee.phone}</td>
                                    <td className="p-4 text-sm text-gray-900">{employee.role}</td>
                                    <td className="p-4 text-sm text-gray-600">{employee.email}</td>
                                    <td className="p-4 text-sm font-medium text-gray-900">{employee.salary}</td>
                                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyle(employee.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${employee.status === 'Full-time' ? 'bg-green-500' : employee.status === 'Part-time' ? 'bg-orange-500' : 'bg-blue-500'}`}></span>
                          {employee.status}
                      </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100">
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
            <span className="text-sm text-gray-500">
              Page <span className="font-medium text-gray-900">1</span> of <span className="font-medium text-gray-900">90</span>
            </span>
                        <div className="flex items-center gap-1">
                            <button className="p-2 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>

                            <button className="w-8 h-8 flex items-center justify-center text-sm font-medium bg-gray-100 text-gray-900 rounded border border-gray-200">1</button>
                            <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-gray-50 rounded">2</button>
                            <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-gray-50 rounded">3</button>
                            <span className="w-8 h-8 flex items-center justify-center text-sm text-gray-400">...</span>
                            <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-gray-50 rounded">90</button>

                            <button className="p-2 border border-gray-200 rounded hover:bg-gray-50">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}