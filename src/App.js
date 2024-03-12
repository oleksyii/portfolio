import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './utils/UserProvider';
import Lab1 from './pages/Lab1';
import Login from './pages/Login';
import Graphs from './pages/Graphs';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/graphs" element={<Graphs />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
