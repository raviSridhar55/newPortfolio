import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Goal = () => {
  return (
    <div id='goal'>
      <div className='goal container'>
        <div className='heading'>
          <h2 className='heading'>goal</h2>
          <div className='underline'></div>
        </div>
        <p className='lead'>
          <ScrollAnimation
            animateIn='animate__pulse'
            style={{ display: 'inline' }}>
            <i class='fas fa-quote-left fa-2x'></i>
          </ScrollAnimation>{' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, unde
          cupiditate, corrupti exercitationem distinctio at eius labore veniam
          inventore tenetur quaerat, quasi cum minima asperiores officia.
          Eligendi aliquam necessitatibus dolor.{' '}
          <ScrollAnimation
            animateIn='animate__pulse'
            style={{ display: 'inline' }}>
            <i class='fas fa-quote-right fa-2x'></i>
          </ScrollAnimation>
        </p>
      </div>
    </div>
  );
};

export default Goal;
