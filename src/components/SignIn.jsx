import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50">
      <div className="flex items-center justify-center min-h-screen">
        {/* Login Form */}
        <div
          className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg p-8 md:p-10 rounded-xl shadow-lg w-80 md:w-96 text-center"
          style={{ backgroundImage: "url('/SignIn_bg.png')" }}
        >
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold font-[Gilroy-ExtraBold] mb-6">
            Welcome To ZoomaaxTV
          </h1>

          {/* Username Input */}
          <div className="relative mb-4">
            <i className="ri-user-3-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 font-[Gilroy-Light] rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <i className="ri-lock-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-12 pr-10 py-3 font-[Gilroy-Light] rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>

          {/* Sign In Button */}
          <button
            className="w-[150px] h-[50px] bg-[#344FB1] font-[Gilroy-Light] text-black py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#2A3E9F] transition"
          >
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="mt-4 text-black font-[Gilroy-Light]">
            Don't have an account?{" "}
            <Link to="/create-account" className="text-blue-300 font-semibold hover:underline">
              Create
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
