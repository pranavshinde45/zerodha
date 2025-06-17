import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WatchList from './WatchList';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Apps from './Apps';
import Funds from './Funds';

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <WatchList />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/holdings" element={<Holdings/>} />
          <Route exact path="/positions" element={<Positions/>} />
          <Route exact path="/funds" element={<Funds/>} />
          <Route exact path="/apps" element={<Apps/>} />
          <Route exact path="/userid" element={""} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;