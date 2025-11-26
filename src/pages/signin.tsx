import {Link, useNavigate} from "react-router-dom";
import {yupResolver} from '@hookform/resolvers/yup';
import {type SubmitHandler, useForm} from "react-hook-form";
import {useRegisterForm} from "../hooks/validateForm.tsx";
import type {RegisterFormValues} from "../hooks/validateForm.tsx";
import authApi from "../api/authApi";
import arrowback from '../assets/images/arrowback.png';
import {useState} from "react";
import logo from "../assets/images/logo.png";
import {useNotice} from "../hooks/notice";
import {setAccessToken} from "../api/authStore";

function SelectRole({selectRole}: { selectRole: (role: string) => void }) {
    const [selectedRole, setSelectedRole] = useState<string>('');
    const {warning} = useNotice()
    const handleSelect = () => {
        if (selectedRole) {
            selectRole(selectedRole);
        } else {
            warning("Please select a role");
        }
    }
    return (
        <div
            className="max-w-md w-full bg-white flex flex-col items-center justify-center px-4 py-8 border-2 border-[#e8e8e9] rounded-2xl">
            <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                            <img src={logo} alt="logo" className="w-16 h-16"/>
                        </div>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">
                        Select account list as what
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base">
                        Options to specify the type or category of account to be used or displayed.
                    </p>
                </div>
                {/* Account Options */}
                <form className="space-y-4 mb-6">
                    {/* As Employee */}
                    <div
                        onClick={() => setSelectedRole('EMPLOYEE')}
                        className={`flex flex-col gap-3  p-5 cursor-pointer transition-all border border-[#e8e8e9] bg-white rounded-2xl ${
                            selectedRole === 'EMPLOYEE'
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-[#e8e8e9] bg-white hover:border-orange-300'
                        }`}

                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M25.3333 26.6667H6.66667C5.19333 26.6667 4 25.4733 4 24V12.6667C4 11.1933 5.19333 10 6.66667 10H25.3333C26.8067 10 28 11.1933 28 12.6667V24C28 25.4733 26.8067 26.6667 25.3333 26.6667Z"
                                stroke="#1B1B1B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M20.86 10.0003V7.90299C20.86 6.42966 19.6667 5.23633 18.1933 5.23633H13.8053C12.332 5.23633 11.1387 6.42966 11.1387 7.90299V10.0003"
                                stroke="#1B1B1B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M10.0002 10V26.6667"
                                stroke="#1B1B1B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M22.0002 17.3333V10"
                                stroke="#1B1B1B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.3335 17.334H24.0002V21.334H17.3335V17.334Z"
                                stroke="#1B1B1B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M22.0002 26.6673V21.334"
                                stroke="#1B1B1B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>


                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                {/*<Briefcase className="w-5 h-5 text-gray-700" />*/}
                                <h3 className="font-semibold text-gray-900">As employee</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Efficiently manage your team with our user-friendly dashboard. Simplify tracking and
                                automate tasks.
                            </p>
                        </div>
                    </div>

                    {/* As Manager */}
                    <div
                        onClick={() => setSelectedRole('ADMIN')}
                        className={`flex flex-col gap-3  p-5 cursor-pointer transition-all border border-[#e8e8e9] bg-white rounded-2xl ${
                            selectedRole === 'ADMIN'
                                ? 'border-orange-500 bg-orange-50'
                                : 'border-[#e8e8e9] bg-white hover:border-orange-300'
                        }`}

                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.3335 22.6673C9.3335 20.8264 10.8259 19.334 12.6668 19.334H14.6668"
                                stroke="#1B1B1B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx="15.9998"
                                cy="12.6673"
                                r="3.33333"
                                stroke="#1B1B1B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.3333 28H10.6667C6.98477 28 4 25.0152 4 21.3333V10.6667C4 6.98477 6.98477 4 10.6667 4H21.3333C25.0152 4 28 6.98477 28 10.6667V16"
                                stroke="#1B1B1B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <rect
                                x="17.3335"
                                y="20"
                                width="12"
                                height="9.33333"
                                rx="2"
                                stroke="#1B1B1B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M20.6665 23.334L22.6665 24.4887C23.079 24.7268 23.5873 24.7268 23.9998 24.4887L25.9998 23.334"
                                stroke="#1B1B1B"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>


                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                {/*<Users className="w-5 h-5 text-gray-700" />*/}
                                <h3 className="font-semibold text-gray-900">As manager</h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                As a manager, simplify HR tasks with our dashboard. Oversee staff, track attendance,
                                automate processes.
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleSelect}
                        className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-3"
                    >
                        Next
                    </button>
                </form>

                {/* Next Button */}


                {/* Sign In Link */}
                <p className="text-center text-sm text-gray-600">
                    Already have an account ? {' '}
                    <span className="text-orange-500 hover:text-orange-600 font-semibold underline">
                        <Link to="/">Signin</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

const AuthPage = () => {
    const [step, nextStep] = useState<number>(1);
    const [tempFormDate, setTempFormDate] = useState<RegisterFormValues | null>(null);
    const navigate = useNavigate();
    //validate form
    const {registerSchema} = useRegisterForm();
    const {
        register, handleSubmit, formState: {errors}
    } = useForm<RegisterFormValues>({
        resolver: yupResolver(registerSchema),
        mode: "onBlur"
    });
    const handleBack = () => step === 2 ? nextStep(1) : navigate("/");
    const onFormStepSubmit: SubmitHandler<RegisterFormValues> = (data) => {
        setTempFormDate(data)
        nextStep(2)
    }
    const handleFinalSubmit = async (role: string) => {
        if (!tempFormDate) {
            return;
        }
        const payload = {
            ...tempFormDate,
            roles: [role]
        };
        try {
            const reponse = await authApi.register(payload);
            const token = reponse.data.data.token;
            if (token) {
                setAccessToken(token)
                navigate("/dashboard")
            }

        } catch (error) {
            console.log("lỗi ")
            console.log(error);
        }
    };
    return (
        <div className="min-h-screen bg-gray-50 flex  items-center justify-center p-4 flex-col ">
            <div className="flex flex-col gap-6">
                <button
                    className="flex items-center w-fit  transition rounded-2xl border-2 py-3 px-4 border-[#e8e8e9] bg-white "
                    onClick={handleBack}>
              <span className="text-sm items-center font-medium leading-6 tracking-wider   flex gap-2">
                <img src={arrowback} alt="arrowback" className="h-5 w-5"/>
                Back
          </span>
                </button>

                {step === 1 ? (
                    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border-2 border-[#e8e8e9]">
                        <div className="flex justify-center mb-6">
                            <img src={logo} alt="logo" className="h-16 w-16"/>
                        </div>
                        {/* Heading */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                Create your account
                            </h2>
                            <p className="text-sm text-gray-500">
                                Streamline HR tasks with a single dashboard! Manage employees, track
                                attendance, and automate payroll.
                            </p>
                        </div>
                        {/* Sign Up Form */}
                        <form onSubmit={handleSubmit(onFormStepSubmit)}>
                            <div className="space-y-4">
                                {/* Full Name Field */}
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        {...register("username")}
                                        name="username"
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                                    />

                                    <p className="text-sm text-red-500 mt-1">
                                        {errors.username?.message}
                                    </p>

                                </div>

                                {/* Work Email Field */}
                                <div>
                                    <label
                                        htmlFor="workEmail"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Work email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        {...register("email")}
                                        name="email"
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Company Name Field */}
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Company name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"

                                        {...register("company")}
                                        name="company"
                                        placeholder="Enter your company name"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                                    />
                                    {errors.company && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {errors.company.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Create password
                                    </label>
                                    <div className="relative">
                                        <input

                                            id="password"
                                            autoComplete="password"
                                            {...register("password")}
                                            placeholder="Create your password"
                                            name="password"
                                            type="password"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition pr-10"
                                        />
                                        {errors.password && (
                                            <p className="text-sm text-red-500 mt-1">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Phone Number Field */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Number phone
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative w-24">
                                            <select
                                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition appearance-none bg-white">
                                                <option value="+1">🇺🇸 +1</option>
                                                <option value="+84">🇻🇳 +84</option>
                                                <option value="+44">🇬🇧 +44</option>
                                                <option value="+86">🇨🇳 +86</option>
                                                <option value="+81">🇯🇵 +81</option>
                                            </select>
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone"

                                            {...register("phone")}
                                            name="phone"
                                            placeholder="Enter your number phone"
                                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                                        />
                                    </div>
                                    {errors.phone && <p className="text-sm text-red-500 mt-1">
                                        {errors.phone.message}
                                    </p>}
                                </div>


                                {/* Sign In Link */}
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-lg transition duration-200 mt-6"
                                >
                                    Next
                                </button>
                            </div>
                        </form>
                        {/* Next Button */}


                        <div className="text-center mt-4">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
              </span>
                            <span
                                className="text-sm text-orange-500 hover:text-orange-600 font-medium underline"
                            >
                  <Link to="/">Sign in  </Link>
              </span>
                        </div>
                    </div>
                ) : (
                    <SelectRole selectRole={handleFinalSubmit}/>
                )}

            </div>
        </div>
    );
}
export default AuthPage;