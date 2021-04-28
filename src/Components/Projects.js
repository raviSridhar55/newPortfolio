import React from 'react';
import './CSS/hero.css';
import Project1 from './img/1.png';
import Project2 from './img/4.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <ScrollAnimation
      animateIn='animate__pulse'
      duration={2}
      id='project'
      // animateOnce={true}
      className='container projects-container'>
      <span className='title'>
        <h1 className='title-r'>Projects</h1>
      </span>
      <h2>Some Project I made...</h2>
      <ScrollAnimation
        animateIn='animate__fadeInUp'
        animateOnce={true}
        duration={0.5}
        className='projects'>
        <figure className='snip0029'>
          <img src={Project1} alt='sample10' />
          <figcaption>
            <div>
              <a href='/'>
                <i class='fab fa-react'></i>
              </a>
              <a href='/'>
                <i class='fab fa-css3-alt'></i>
              </a>
              <a href='/'>
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
              <a href='/'>
                <i class='fab fa-html5'></i>
              </a>
              <a href='/'>
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
      </ScrollAnimation>

      <div className='and-more'>
        <h4>
          <Link to='/projects-main'>Click Here for More.....</Link>
        </h4>
      </div>
    </ScrollAnimation>
  );
};

export default Projects;
