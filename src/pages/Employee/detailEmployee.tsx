import {useEffect, useState} from "react";
import { X, Calendar, Mail, Phone, MapPin, FileText, CheckCircle, AlertCircle, Trash2 } from 'lucide-react';
import EmployeeApi from "../../api/userApi";
import {UUID} from "node:crypto";
import type ModelEmployee from "../../model/ModelEmployee";

const detailEmployee=({onClose,record})=>{
    const [detailEmployee, setDetailEmployee] = useState<ModelEmployee[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchDetailUser= async (employeeID:UUID)=>{
        try {
            const reponse=await EmployeeApi.getByEmployeeID(employeeID)
            if(reponse.data.data)
            {
                setDetailEmployee(reponse.data.data);
            }
        }
        catch(err)

        {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(record){
            fetchDetailUser()
        }
        else
        {
            console.log("lỗi nè ");
        }

    },[record])
    if(loading) return <div> ..Đang check....</div>

    return (
        <div className="p-6 space-y-6">
            {detailEmployee.map((itemDetail, index) => (
                <div key={itemDetail.id} className="space-y-6 border-b border-gray-200 pb-6">
                    {/* Employee Header */}
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                            {itemDetail.image || itemDetail.username.charAt(0)}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">{itemDetail.username}</h3>
                            <p className="text-sm text-gray-600">{itemDetail.role}</p>
                            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                • {itemDetail.status}
              </span>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <MapPin size={16} className="text-gray-600" />
                            Address
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{itemDetail.address}</p>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                <Phone size={14} className="text-gray-600" />
                                Phone
                            </h4>
                            <p className="text-sm text-gray-700">{itemDetail.phone}</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                <Mail size={14} className="text-gray-600" />
                                Email
                            </h4>
                            <p className="text-sm text-gray-700">{itemDetail.email}</p>
                        </div>
                    </div>

                    {/* Salary & Date of Birth */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h4 className="text-xs font-semibold text-gray-900 mb-2">Salary</h4>
                            <p className="text-sm font-medium text-gray-900">{itemDetail.salary}</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-gray-900 mb-2">Date of birth</h4>
                            <p className="text-sm text-gray-700">{itemDetail.dob}</p>
                        </div>
                    </div>

                    {/* Contract Information */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <FileText size={16} className="text-gray-600" />
                            Date of contract
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-gray-600 mb-1">Start date</p>
                                <p className="text-sm font-medium text-gray-900">{itemDetail.startDate}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-600 mb-1">End date</p>
                                <p className="text-sm font-medium text-gray-900">{itemDetail.endDate}</p>
                            </div>
                        </div>
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg flex items-start gap-2">
                            <AlertCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-blue-800">
                                This employee's contract will expire in <strong>{itemDetail.contractExpiry}</strong>
                            </p>
                        </div>
                    </div>

                    {/* Progress Task */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle size={16} className="text-gray-600" />
                            Progress task
                        </h4>
                        <div className="flex gap-4 mb-4">
                            <div className="flex-1">
                                <p className="text-xs text-gray-600 mb-1">Progress task</p>
                                <p className="text-lg font-bold text-gray-900">{itemDetail.progressTasks}</p>
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-gray-600 mb-1">Complete task</p>
                                <p className="text-lg font-bold text-gray-900">{itemDetail.completedTasks}</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">Deadline: {itemDetail.deadline}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default detailEmployee