
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // 👇 Load user & token from localStorage on first load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const register = async (formData) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log('Registration successful:', res.data);
      return true;
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      console.error('Registration failed:', message);

      if (err.response?.status === 409) {
        alert('User already exists. Please log in or use a different email.');
      } else {
        alert('Registration failed: ' + message);
      }

      return false;
    }
  };

//   const login = async (credentials) => {
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', credentials);
//       setUser(res.data.user);
//       setToken(res.data.token);

//       // 🧠 Save to localStorage
//       localStorage.setItem('user', JSON.stringify(res.data.user));
//       localStorage.setItem('token', res.data.token);

//       return true;
//     } catch (err) {
//       console.error('Login failed:', err.response?.data?.message || err.message);
//       return false;
//     }
//   };
// On login
const login = async (credentials) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', credentials);
      setToken(res.data.token);
      setUser(res.data.user);
      return true;
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message);
      alert('Login failed: ' + (err.response?.data?.message || err.message));
      return false;
    }
  };
  
  
  // On app load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
  
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);
 
  

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, setUser, login, logout ,register}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
