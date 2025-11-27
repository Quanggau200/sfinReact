import {usePageTitle} from "../context/pageTitleContext";
import {useEffect} from "react";

const Setting =()=>{
    const {setTitle} = usePageTitle();
    useEffect(()=>{
        setTitle(['Setting']);
    },[])
    return (
        <div className="h-screen bg-white font-sans text-gray-800 p-6">
            <div>
                {/* Sidebar Navigation */}
                <div>
                    <h2 className="text-xl font-nomal text-gray-900">Account setting</h2>
                    <p className="text-sm text-gray-400 mt-1">
                        Full control to manage your account, security, and notifications easily and securely.
                    </p>
                </div>
               <div className="flex mt-5 gap-5">
                   <aside className="w-full md:w-64 flex-shrink-0 flex-1">
                       <nav className="space-y-1">
                           <a href="#" className="block px-4 py-2.5 text-sm font-medium bg-gray-100 text-gray-900 rounded-lg">
                               Personal
                           </a>
                           {['Notifications', 'Plan', 'Appearance', 'Financial', 'Integrations'].map((item) => (
                               <a
                                   key={item}
                                   href="#"
                                   className="block px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                               >
                                   {item}
                               </a>
                           ))}
                       </nav>
                   </aside>
                   {/* Main Content Area */}
                   <main className="flex-5">

                       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                           {/* Left Column: Forms */}
                           <div className="lg:col-span-2 space-y-8">

                               {/* Personal Information Card */}
                               <div className="bg-gray-50/50 border border-gray-100 rounded-xl p-6">
                                   <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal information</h3>

                                   <div className="space-y-4">
                                       {/* Full Name */}
                                       <div>
                                           <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                                           <input
                                               type="text"
                                               defaultValue="Patrik Hugya"
                                               className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                                           />
                                       </div>

                                       {/* Date of Birth */}
                                       <div>
                                           <label className="block text-sm font-medium text-gray-700 mb-1">Date of birth</label>
                                           <div className="relative">
                                               <input
                                                   type="text"
                                                   defaultValue="20 February 2001"
                                                   className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                                               />
                                               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                                                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                               </div>
                                           </div>
                                       </div>

                                       {/* Gender */}
                                       <div>
                                           <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                           <div className="relative">
                                               <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white appearance-none">
                                                   <option>Male</option>
                                                   <option>Female</option>
                                                   <option>Other</option>
                                               </select>
                                               <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                                                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                               </div>
                                           </div>
                                       </div>
                                   </div>

                                   {/* Form Actions */}
                                   <div className="flex justify-end items-center gap-3 mt-6">
                                       <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                                           Cancel
                                       </button>
                                       <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 shadow-sm">
                                           Change Information
                                       </button>
                                   </div>
                               </div>

                               {/* Contact Information Card */}
                               <div className="bg-gray-50/50 border border-gray-100 rounded-xl p-6">
                                   <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact information</h3>
                                   <div className="space-y-4">
                                       <div>
                                           <label className="block text-sm font-medium text-gray-700 mb-1">Work email</label>
                                           <input
                                               type="email"
                                               defaultValue="patrikhgy@gmail.com"
                                               className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                                           />
                                       </div>

                                       {/* Phone Number */}
                                       <div>
                                           <label className="block text-sm font-medium text-gray-700 mb-1">Number phone</label>
                                           <div className="flex">
                                               <input
                                                   type="text"
                                                   defaultValue="89 827 824 019"
                                                   className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                                               />
                                           </div>
                                       </div>

                                       {/* Address */}
                                       <div>
                                           <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                           <input
                                               type="text"
                                               defaultValue="Alex Johnson, 742 Evergreen Terrace, Springfield, IL 62704"
                                               className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                                           />
                                       </div>
                                   </div>

                                   {/* Form Actions */}
                                   <div className="flex justify-end items-center gap-3 mt-6">
                                       <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                                           Cancel
                                       </button>
                                       <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 shadow-sm">
                                           Change Information
                                       </button>
                                   </div>
                               </div>

                               {/* Security Section (Partial) */}
                               <div className="bg-gray-50/50 border border-gray-100 rounded-xl p-6">
                                   <h3 className="text-lg font-semibold text-gray-800">Security</h3>
                                   {/* Content would go here */}
                               </div>
                           </div>

                           {/* Right Column: Profile Card */}
                           <div className="lg:col-span-1">
                               <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
                                   <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-200">
                                       <img
                                           src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                           alt="Profile"
                                           className="w-full h-full object-cover"
                                       />
                                   </div>
                                   <h3 className="text-lg font-bold text-gray-900">Patrik Hugya</h3>
                                   <p className="text-sm text-gray-500 mb-6">patrikhgy@gmail.com</p>

                                   <div className="flex gap-3 w-full">
                                       <button className="flex-1 px-3 py-2 text-xs font-medium text-red-500 bg-white border border-gray-200 rounded-lg hover:bg-red-50">
                                           Remove photo
                                       </button>
                                       <button className="flex-1 px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                                           Change photo
                                       </button>
                                   </div>
                               </div>
                           </div>

                       </div>
                   </main>
               </div>
            </div>
        </div>
    );
}
export default Setting;