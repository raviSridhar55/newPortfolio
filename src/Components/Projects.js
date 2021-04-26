import React from 'react';
import './CSS/hero.css';
import Project1 from './img/1.png';
import Project2 from './img/4.png';
import medibondLogo from './img/MediBondIcon.png';

const Projects = () => {
  return (
    <div id='project' className='container projects-container'>
      <span className='title'>
        <h1 className='title-r'>Projects</h1>
      </span>

      <div className='projects'>
        <figure className='snip0029'>
          <img src={Project1} alt='sample10' />
          <figcaption>
            <div>
              <a>
                <i class='fab fa-react'></i>
              </a>
              <a>
                <i class='fab fa-css3-alt'></i>
              </a>
              <a>
                <i class='fab fa-node-js'></i>
              </a>
            </div>
            <h2>
              Medi
              <span
                style={{
                  color: '#ff4b2b',
                }}>
                Bond
              </span>
            </h2>
          </figcaption>
        </figure>
        <figure className='snip0029'>
          <img src={Project2} alt='sample10' />
          <figcaption>
            <div>
              <a>
                <i class='fab fa-html5'></i>
              </a>
              <a>
                <i class='fab fa-css3-alt'></i>
              </a>
            </div>
            <h2>
              <span style={{ color: '#28a745' }}>
                <i class='fas fa-book-open'></i> Edge
              </span>
              Ledger
            </h2>
          </figcaption>
        </figure>
      </div>

      <div className='and-more'>
        <h4>
          <a>And More.....</a>
        </h4>
      </div>
    </div>
  );
};

export default Projects;
