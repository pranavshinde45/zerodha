import React from 'react';
import Menu from './Menu';

function TopBar() {
  return (
    <div className="top-container d-flex" style={{height:"80px"}}>
      <div className="containers d-flex gap-5 border p-4" style={{width:'100%'}}>
        <div className="nifty d-flex align-items-center ps-4">
          <p className="index" style={{fontSize:"15px"}}>Nifty 50</p>&nbsp;
          <p className="index-point" style={{fontSize:"15px"}}>100.2</p>
        </div>
        <div className="sensex d-flex align-items-center">
          <p className="index" style={{fontSize:"15px"}}>Sensex</p>&nbsp;
          <p className="index-point" style={{fontSize:"15px"}}>100.2</p>
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default TopBar;
