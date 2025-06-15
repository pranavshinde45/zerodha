import React from 'react';
function Pricing() {
    return (
        <div className='container p-5 mt-5'>
          <div className='row'>
            <div className='col-6'>
              <h1>Unbeatable pricing</h1>
              <p>We pioneered the concept of discount broking and price<br/> transparency in India. Flat fees and no hidden charges</p>
              <a href="#" style={{textDecoration:"none"}}>See Pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='col-6'>
              <div className='row'>
                <div className='col border text-center p-4'>
                  <h1>&#8377;0</h1>
                  <p>Free equity delivery anddirect mutual funds</p>
                </div>
                <div className='col border text-center p-4'>
                  <h1>&#8377;20</h1>
                  <p>Intraday and F&O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Pricing;