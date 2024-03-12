// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');

  const updateUserName = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  return (
    <UserContext.Provider value={{ userName, updateUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
