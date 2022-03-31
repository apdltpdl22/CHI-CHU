import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import logo from './logo.svg';
import './App.css';

import Landing from './pages/Landing';
import Search from './pages/Search';
import SearchResult from './pages/SearchResult';
import PlanDetail from './pages/PlanDetail';
import PlanComparison from './pages/PlanComparison';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/result" element={<SearchResult />} />
          <Route path="/search/result/:id" element={<PlanDetail />} />
          <Route path="/compare" element={<PlanComparison />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
