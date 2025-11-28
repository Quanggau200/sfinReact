import "./home.css";
import logo from "../assets/images/logo.png"
import {Link, useNavigate} from "react-router-dom";
import type  {LoginFormValue} from "../hooks/validateForm";
import {useRegisterForm} from "../hooks/validateForm";
import {yupResolver} from "@hookform/resolvers/yup";
import { type SubmitHandler, useForm} from "react-hook-form";
import authApi from "../api/authApi";
import {useUser} from "../context/userContext";
export default function Home() {
    const {loginSchema}= useRegisterForm();
    const navigate=useNavigate();
    const {fetchUser} = useUser();
    const {register,handleSubmit,formState:{errors}} = useForm<LoginFormValue>({
        resolver: yupResolver(loginSchema),
        mode:"onBlur"
    }
    );
    const login:SubmitHandler<LoginFormValue> = async (data)=>
    {
        try {
            const reponse = await authApi.login(data);
            await fetchUser();
            navigate("/dashboard");

        }catch(err){
            console.log(err);
        }
    }
  return (
  <div className="flex h-screen">
      {/* Left Panel - Info Section */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-orange-50 via-orange-200 via-orange-300 to-orange-500 p-12 flex-col justify-start">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Effortlessly manage and track your employees with precision.
          </h1>
          
          {/* Trustpilot Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 fill-green-500" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-700">74.35 reviews on Trustpilot</p>
         
        </div>
           {/* <img src={layout} alt="" /> */}
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="logo" className="h-16 w-16"/>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Continue with your account
            </h2>
            <p className="text-sm text-gray-500">
              Simplify HR tasks with our dashboard! Manage employees, track attendance, and automate payroll effortlessly.
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-3" onSubmit={handleSubmit(login)}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
              />
                {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  
                  id="password"

                  {...register("password")}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition pr-10"
                />
                  {errors.password && (
                      <p className="text-sm text-red-500 mt-1">
                          {errors.password.message}
                      </p>
                  )}
                <button
                  type="button"
                
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  
                </button>
              </div>
            </div>
              <a href="#" className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                Forget password?
              </a>
            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-lg transition duration-200"
            >
              Sign In
            </button>
            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-sm text-gray-600">Have an account? </span>
              <span
              
               className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                <Link to="/register">Register</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
