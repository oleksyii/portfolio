// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  // Logic for username
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');

  const updateUserName = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  // Logic for table data for Lab2
  const [expertEstimations, setExpertEstimations] = useState([]);
  const [lab2Values, setLab2Values] = useState([]);
  const [results, setResults] = useState([]);

  return (
    <UserContext.Provider value={{ userName, updateUserName, expertEstimations, setExpertEstimations, results, setResults, lab2Values, setLab2Values }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
