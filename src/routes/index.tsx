import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Dashboard from '../pages/Dashboard';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
