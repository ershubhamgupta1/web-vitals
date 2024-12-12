import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoodFIDScore from './components/Fid/GoodFid';
import GoodLCPScore from './components/Lcp/GoodLcp';
import BadLCPScore from './components/Lcp/BadLcp';
import GoodClsScoreComp from './components/Cls/GoodCls';
import BadClsScoreComp from './components/Cls/BadCls';
import BadFIDScore from './components/Fid/BadFid';

const App = () => {
  return (
<Router>
      <h1>Welcome to Web Vitals</h1>
          <Routes>
            <Route path="/fid-good" element={<GoodFIDScore />} />
            <Route path="/fid-bad" element={<BadFIDScore />} />

            <Route path="/cls-good" element={<GoodClsScoreComp />} />
            <Route path="/cls-bad" element={<BadClsScoreComp />} />

            <Route path="/lcp-good" element={<GoodLCPScore />} />
            <Route path="/lcp-bad" element={<BadLCPScore />} />

          </Routes>
    </Router>
  );
};

export default App;
