// context/AuthContext.jsx
import React, { createContext } from 'react';

export const authDataContext = createContext();

function AuthProvider({ children }) {
  const serverUrl = "http://localhost:3000"; 

  const value = { serverUrl };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthProvider;
