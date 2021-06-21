import React from 'react';
import './CSS/hero.css';
import Project1 from './img/1.png';
import Project2 from './img/4.png';

import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <section
      id='project'
      // animateOnce={true}
      className='container projects-container'>
      <div className='right'>
        <span className='title'>
          <h1 className='title-r'>Projects</h1>
        </span>
      </div>

      <div className='project-landing-container'>
        <div className='inner-l'></div>
        <div className='outer-l'>
          <img src={Project1} alt='w1' />
        </div>
        <div className='project-landing-title-l'>
          <h1>MediBond</h1>
        </div>
      </div>
      <div className='project-landing-container'>
        <div className='inner-r'></div>
        <div className='outer-r'>
          <img src={Project2} alt='w2' />
        </div>
        <div className='project-landing-title-r'>
          <h1>EdgeLedger</h1>
        </div>
      </div>

      <div className='and-more'>
        <h4>
          <Link to='/projects-main' className='and-more-link'>
            Click Here for More.....
          </Link>
        </h4>
      </div>
    </section>
  );
};

export default Projects;
