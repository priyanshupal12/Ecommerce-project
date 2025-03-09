import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context for Token
export const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Initialize token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }
  }, []);

  const updateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
  };

  return (
    <TokenContext.Provider value={{ token, updateToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
