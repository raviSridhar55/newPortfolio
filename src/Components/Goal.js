import React from 'react';
import Poto from './img/aboutRS.jpg';
// import ScrollAnimation from 'react-animate-on-scroll';

const Goal = () => {
  return (
    <div id='goal'>
      <div className='container profile'>
        <div className='profile-me'>
          <h2>
            <i class='fas fa-quote-left'></i> In 5 years I see myself as...
          </h2>
          <h2>
            Full Stack Web Developer <i class='fas fa-quote-right'></i>
          </h2>
        </div>
        {/* <div className='profile-image'>
          <img src={Poto} alt='me' />
        </div> */}
        <div className='profile-image'>
          <img src={Poto} alt='pic' />
          <div className='descriptions'>
            <h1>Devarakonda Venkata Ravi Sridhar</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              sapiente?
            </p>
            <button>
              <a href='/about-me'>Contact</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
