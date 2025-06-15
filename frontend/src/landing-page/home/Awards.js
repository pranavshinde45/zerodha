import React from 'react';
function Awards() {
  return (
    <div className='container mt-5 pt-5'>
      <div className='row pt-5 mt-3'>
        <div className='col'>
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className='col p-5'>
          <h1>Largest stock broker in India</h1>
          <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div className='row pt-3'>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
             <div className='col-6'>
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <img src="media/images/pressLogos.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;