import React from 'react';
import Menu from './Menu';

function TopBar() {
    return (
        <div className='TopContainer d-flex'>
            <div className='containers d-flex justify-content-around align-items-center border' style={{ width: "330px", height: "70px" }}>
                <div className='nifty d-flex'>
                    <p className='index'>NIFTY 50</p>&nbsp;&nbsp;&nbsp;
                    <p className='index-point'>{100.2}</p>
                </div>
                <div className='sensex d-flex'>
                    <p className='index'>SENSEX</p>&nbsp;&nbsp;&nbsp;
                    <p className='index-point'>{100.2}</p>
                </div>
            </div>
            <Menu/>
        </div>
    );
}

export default TopBar;