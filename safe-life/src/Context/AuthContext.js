import React, { createContext, useState} from "react";


export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  const [id, setId] = useState(0)
    
  return (
    <AuthContext.Provider value={{ token, setToken, id, setId }}>
      {children}
    </AuthContext.Provider>
  );
}


