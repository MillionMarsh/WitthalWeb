import React from 'react';
import shipImage from '../../assets/Ship.png'; // Adjust the path as necessary
import logoImage from '../../assets/WitthalLogoVertical.png'; // Adjust the path as necessary
import './LoginSignup.css'; // Ensure you have the styles defined in this file

type LoginSignupProps = {
  onLogin: () => void;
};

const LoginSignup: React.FC<LoginSignupProps> = ({ onLogin }) => { 
  return (
      <div className="flex h-screen">
    {/* Left Side Image */}
    <div
      className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${shipImage})` }}
    ></div>

    {/* Right Side Form */}
    <div className="w-1/2 flex items-center justify-center bg-[#f0f8ff]">
      <div className="w-full max-w-md p-8">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img
              src={logoImage}
              alt="Witthal Logo"
              className="w-32 mx-auto"
            />
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-bold text-black mb-1"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-black p-3 rounded focus:outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-black mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-black p-3 rounded focus:outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-3 rounded shadow-2xl hover:bg-blue-900 transition button"
            onClick={onLogin} // Assuming auth is a function to handle authentication
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default LoginSignup;