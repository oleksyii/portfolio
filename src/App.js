import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './utils/UserProvider';
import Lab1 from './pages/lab1/Lab1';
import Lab2 from './pages/lab2/Lab2';
import Login from './pages/lab1/Login';
import Graphs from './pages/lab1/Lab1Graphics';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Login />} />
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/lab2" element={<Lab2 />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
