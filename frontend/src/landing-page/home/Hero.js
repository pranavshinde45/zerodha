import React from 'react';
function Hero() {
    return (
        <div className='container'>
          <div className='row text-center'>
              <img src="media/images/homeHero.png"/><br/>
              <h1 className='pt-5 mt-5'>Invest in everything</h1>
              <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
              <button className='btn btn-primary' style={{width:"20%",margin: "0 auto",fontSize:"20px"}}>Signup Now</button>
          </div>
        </div>
      );
}

export default Hero;