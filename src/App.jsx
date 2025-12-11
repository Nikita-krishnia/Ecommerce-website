import {HomePage } from './pages/HomePage';
import { Routes,Route } from 'react-router';

import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage /> } />
      <Route page="checkout" element={<div></div>}></Route>
    </Routes>
    
  );
}

export default App
