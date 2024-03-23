import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './utils/UserProvider';
// import Lab1 from './pages/lab1/Lab1';
import Lab2 from './pages/lab2/Lab2';
import Login from './pages/lab1/Login';
// import Graphs from './pages/lab1/Lab1Graphics';

const LazyLab1 = lazy(() => import('./pages/lab1/Lab1'));
const LazyLab2 = lazy(() => import('./pages/lab2/Lab2'));
const LazyGrapghs = lazy(() => import('./pages/lab1/Lab1Graphics'))


function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Suspense fallback={<div>Loading...</div>}><LazyLab1 /></Suspense>} />
          <Route path="/lab1" element={<Suspense fallback={<div>Loading...</div>}><LazyLab1 /></Suspense>}  />
          <Route path="/graphs" element={<Suspense fallback={<div>Loading...</div>}><LazyGrapghs /></Suspense>} />
          <Route path="/lab2" element={<Suspense fallback={<div>Loading...</div>}><LazyLab2 /></Suspense>} />
          {/* <Suspense fallback={<div>Loading...</div>}><LazyLab2 /></Suspense> */}
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
