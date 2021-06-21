import React from 'react';
import '../CSS/projects.css';
import w1 from './Projects/1.png';
import scrollGif from '../GIFS/arrowDown.gif';
import w2 from './Projects/4.png';

const ProjectsPage = () => {
  return (
    <div className='project-page '>
      <div className='project-page-content'>
        <div className='container'>
          <h1 className='work-title'>Here are some projects I made</h1>
          <div className='gif-work'>
            <img src={scrollGif} alt='gif' />
          </div>
        </div>
      </div>
      <div id='work' className='work-1'>
        <div className='container work'>
          <div className='left-content'>
            <h1>MediBond</h1>
            <p className='lead lh-lg'>A web App to for local pharmacies</p>
            <div className='tools'></div>
          </div>
          <div className='right-content'>
            <img src={w1} alt='w1' />
          </div>
        </div>
      </div>
      <div id='work' className='work-2'>
        <div className='container work'>
          <div className='left-content'>
            <h1>EdgeLedger</h1>
            <p className='lead lh-lg'>A website for financial Assistance</p>
          </div>
          <div className='right-content'>
            <img src={w2} alt='w2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
