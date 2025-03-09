import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TokenContext } from './TokenProvider'; // Import TokenContext
import {useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/material/styles";
const LoginRoute = () => {
  const [userInput, setUserInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  

  // Access the context
  const { updateToken } = useContext(TokenContext); // Use updateToken from context

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    if (!userInput || !password) {
      setError('Please provide both username/email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email: userInput,
        password,
      });

      const token = response.data.token; // Assuming the token is returned from the API

      // Update token using the context's updateToken function
      updateToken(token);

      navigate('/'); // Redirect to home or another page after login

    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="mb-6 flex flex-col gap-y-2">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Welcome Back!
          </h2>
          <img
            src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/en_IN/dw9cd4a967/images/Manvayar-Crest-Mohey_Horizontal_3D_logo_Desktop.png"
            alt="Company Logo"
            style={{ height: isMediumScreen ? "25px" : "40px", width: "auto" }}
            className='bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 h-screen shadow-black rounded-lg'
          />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or Email"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            aria-label="Email or username"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-300"
          />
          <div className="relative mb-4">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-300"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 font-semibold"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>
        {error && (
          <div className="text-red-500 text-sm mt-4 text-center">{error}</div>
        )}
      </div>
    </div>
  );
};

export default LoginRoute;
