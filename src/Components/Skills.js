import React from 'react';
import './CSS/skillsAndFooter.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Skills = () => {
  return (
    <div id='skills'>
      <div className='container'>
        <span className='title'>
          <h1 className='title-r'>Skills</h1>
        </span>
        <div className='special-skills'>
          <h2>⚪ HTML5</h2>
          <h2>⚪ CSS3</h2>
          <h2>⚪ REACT</h2>
        </div>
        <div className='container skills'>
          <div className='skills-container'>
            <div className='skill'>
              <h2>JavaScript</h2>
            </div>
            <div className='progress'>
              <ScrollAnimation
                animateIn='animate__fadeInRight animate__slower'
                className='scrollAnim'
                style={{ width: '65%' }}></ScrollAnimation>
            </div>
          </div>
          <div className='skills-container'>
            <div className='skill'>
              <h2>SASS</h2>
            </div>
            <div className='progress'>
              <ScrollAnimation
                animateIn='animate__fadeInRight animate__slower'
                className='scrollAnim'
                style={{ width: '50%' }}></ScrollAnimation>
            </div>
          </div>
          <div className='skills-container'>
            <div className='skill'>
              <h2>Bootstrap</h2>
            </div>
            <div className='progress'>
              <ScrollAnimation
                animateIn='animate__fadeInRight animate__slower'
                className='scrollAnim'
                style={{ width: '90%' }}></ScrollAnimation>
            </div>
          </div>
          <div className='skills-container'>
            <div className='skill'>
              <h2>Python</h2>
            </div>
            <div className='progress'>
              <ScrollAnimation
                animateIn='animate__fadeInRight animate__slower'
                className='scrollAnim'
                style={{ width: '40%' }}></ScrollAnimation>
            </div>
          </div>
          <div className='skills-container'>
            <div className='skill'>
              <h2>Wire Framing</h2>
            </div>
            <div className='progress'>
              <ScrollAnimation
                animateIn='animate__fadeInRight animate__slower'
                className='scrollAnim'
                style={{ width: '60%' }}></ScrollAnimation>
            </div>
          </div>
          <div className='skills-container'>
            <div className='skill'>
              <h2>C Programming</h2>
            </div>
            <div className='progress'>
              <ScrollAnimation
                animateIn='animate__fadeInRight animate__slower'
                className='scrollAnim'
                style={{ width: '70%' }}></ScrollAnimation>
            </div>
          </div>
          <div className='skills-container'>
            <div className='skill'>
              <h2>C++ Programming</h2>
            </div>
            <div className='progress'>
              <ScrollAnimation
                animateIn='animate__fadeInRight animate__slower'
                className='scrollAnim'
                style={{ width: '75%' }}></ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '200px' }}></div>
    </div>
  );
};

export default Skills;
