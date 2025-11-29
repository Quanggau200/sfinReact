import {useEffect, useState} from "react";
import { X, Calendar, Mail, Phone, MapPin, FileText, CheckCircle, AlertCircle, Trash2 } from 'lucide-react';
import EmployeeApi from "../../api/userApi";
import { useSearchParams} from "react-router-dom";
import type {ModelEmployee} from "../../model/ModelEmployee";

function EmployeeDetail()
{
    const [detailEmployee, setDetailEmployee] = useState<ModelEmployee |null>(null);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const decode=searchParams.get("id");
    const id: string|null = decode ?  atob(decode):null;
     useEffect(() => {
        const FetchDetailEmployee = async () => {
            if(!id)
            {
                setLoading(false);
              return;
            }
            try {
                const reponse=await EmployeeApi.getByEmployeeID(id);
                setDetailEmployee(reponse.data);
                console.log(reponse.data);
            }
            catch(err) {
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
        FetchDetailEmployee()
    }, [id]);
     if (loading) return <div>Loading...</div>
    if (!detailEmployee) return <div className="p-6 text-red-500">Không tìm thấy thông tin nhân viên hoặc ID sai.</div>
    return (
        <div className="flex items-center justify-end h-screen">

        <div className="w-[460px] bg-white shadow-2xl rounded-lg flex flex-col relative">

            <div className="px-4 py-3.5 flex items-center justify-between border-b border-gray-100 flex-shrink-0">
                <h2 className="text-lg font-bold text-gray-900">Detail employee</h2>
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <div className="flex-1 no-scrollbar p-4">

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                        <img src="https://i.pravatar.cc/150?img=5" alt="Avatar"
                             className="w-12 h-12 rounded-full object-cover"/>
                        <div>
                            <h3 className="text-base font-bold text-gray-900">Uzumaki Naruto</h3>
                            <p className="text-xs text-gray-500">UI UX Designer</p>
                        </div>
                    </div>
                    <span
                        className="status_text inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium border">
                    <span className="w-1 h-1 bg-green-600 rounded-full"></span> Full-time
                </span>
                </div>

                <div className="space-y-4 mb-4">
                    <div>
                        <label className="block text-sm font-normal text-gray-900 mb-1">Address</label>
                        <p className="text-xs text-gray-500 leading-relaxed">Jl. Rajawali I No.999 Blok C, 69412, Kec.
                            Sampang, Kel. Karang Dalem, Kab. Sampang, Jawa Timur, Indonesia.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                        <div>
                            <label className="block text-sm font-normal text-gray-900 mb-1">Phone</label>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                23124324023
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-normal text-gray-900 mb-1">Email</label>
                            <div className="flex items-center gap-2 text-xs text-gray-500 truncate">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <span className="truncate">uzumakinaruto@gmail.com</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-normal text-gray-900 mb-1">Date of birth</label>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                20 April 2003
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-normal text-gray-900 mb-1">Salary</label>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                $1,500
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-xl border border-gray-100 mb-8 p-1">
                    <h4 className="font-normal text-sm text-gray-900 px-3 py-2">Date of contract</h4>
                    <div className="bg-white px-3 py-3 rounded-xl">
                        <div className="grid grid-cols-2 gap-4 mb-3">
                            <div>
                                <label className="text-xs text-gray-500 block mb-1 font-medium">Start date</label>
                                <div
                                    className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 shadow-sm">
                                    7 Feb 2025
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 block mb-1 font-medium">End date</label>
                                <div
                                    className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 shadow-sm">
                                    30 May 2025
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                            <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p className="leading-tight">This employee's contract will expire in <span
                                className="font-bold text-gray-800">3 months 21 days</span> from now.</p>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-200 mb-6">
                    <div className="flex gap-6">
                        <button
                            className="pb-2 border-b-2 border-orange-500 text-orange-500 font-medium text-sm flex items-center gap-2">
                            Progress task
                            <span className="bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded text-[10px]">4</span>
                        </button>
                        <button
                            className="pb-2 text-gray-500 font-medium text-sm flex items-center gap-2 hover:text-gray-700 transition">
                            Complete task
                            <span className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-[10px]">14</span>
                        </button>
                    </div>
                </div>

                <div className="space-y-4 pb-4">

                    <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white">
                        <div
                            className="inline-block px-2 py-1 text-green-600 text-[10px] font-medium rounded border border-green-100 mb-2">
                            Deadline: 28 Feb 2025
                        </div>
                        <h5 className="text-sm font-bold text-gray-900 mb-1">Redesign website for Indomie</h5>
                        <p className="text-xs text-gray-400 mb-3 line-clamp-1">Revamp the website with a fresh and
                            modern design that cap...</p>

                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xs font-semibold text-gray-700">40%</span>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white">
                        <div
                            className="inline-block px-2 py-1 text-green-600 text-[10px] font-medium rounded border border-green-100 mb-2">
                            Deadline: 28 Feb 2025
                        </div>
                        <h5 className="text-sm font-bold text-gray-900 mb-1">Redesign website for Indomie</h5>
                        <p className="text-xs text-gray-400 mb-3 line-clamp-1">Revamp the website with a fresh and
                            modern design that cap...</p>

                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 rounded-full"></div>
                            </div>
                            <span className="text-xs font-semibold text-gray-700">40%</span>
                        </div>
                    </div>

                    <div className="h-10"></div>
                </div>

            </div>

            <div className="border-t border-gray-200 p-4 bg-white flex items-center justify-between flex-shrink-0 z-10">
                <button
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition">
                    Cancel
                </button>
                <button
                    className="px-4 py-2 bg-red-500 rounded-lg text-sm font-semibold text-white hover:bg-red-600 flex items-center gap-2 transition shadow-md shadow-red-200">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    Delete
                </button>
            </div>

        </div>
        </div>
        );
        }
        export default EmployeeDetail