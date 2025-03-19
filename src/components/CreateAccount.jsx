import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50">
      <div className="flex items-center justify-center min-h-screen">
        {/* Registration Form */}
        <div
          className="relative z-10 bg-white bg-opacity-20 backdrop-blur-lg p-8 md:p-10 rounded-xl shadow-lg text-center"
          style={{ backgroundImage: "url('/CreateAccount_bg.png')" }}
        >
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold font-[Gilroy-ExtraBold] mb-6">
            Create Account
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

          {/* Mobile Number Input */}
          <div className="relative mb-4">
            <i className="ri-phone-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            <input
              type="text"
              placeholder="Mobile Number"
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
          </div>

          {/* Password Confirm */}
          <div className="relative mb-6">
            <i className="ri-lock-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full pl-12 pr-10 py-3 font-[Gilroy-Light] rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>

          {/* Create Account Button */}
          <button
            onClick={() => navigate("/account-created")}
            className="w-[150px] h-[50px] bg-[#344FB1] text-black font-[Gilroy-Light] py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#2A3E9F] transition"
          >
            Create
          </button>

          {/* Sign In Link */}
          <p className="mt-4 text-black font-[Gilroy-Light]">
            Already have an account?{" "}
            <Link to="/" className="text-blue-300 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
