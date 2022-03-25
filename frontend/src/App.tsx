import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Landing from './pages/Landing';
import Search from './pages/Search';
import SearchResult from './pages/SearchResult';
import PlanDetail from './pages/PlanDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/result" element={<SearchResult />} />
        <Route path="/search/detail" element={<PlanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
