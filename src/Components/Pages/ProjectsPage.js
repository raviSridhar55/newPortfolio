import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../CSS/projects.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Down from '../GIFS/arrowDown.gif';
import w1 from './Projects/1.png';
import w2 from './Projects/4.png';
const ProjectsPage = () => {
  return (
    <div className='project-page'>
      <div className='container project-page-container'>
        <div className='project-page-content'>
          <ScrollAnimation
            animateIn='animate__fadeInRight'
            animateOut='animate__fadeOutLeft'
            className='project-page-title'>
            <h1>here are the project i made</h1>
          </ScrollAnimation>
          <div className='gif-link'>
            <h2 style={{ textAlign: 'center', fontSize: '1.2rem' }}>
              Click here to see projects
            </h2>
            <a href='#work' style={{ textAlign: 'center' }}>
              <img src={Down} alt='neeche' />
            </a>
          </div>
        </div>
      </div>

      <div id='work' className='work container'>
        <ScrollAnimation
          animateIn='animate__pulse'
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'row',
            alignContent: 'center',
            textAlign: 'center',
          }}>
          <Carousel height='100%' width='50%'>
            <img src={w1} alt='w1' style={myStyle} />
            <img src={w1} alt='w1' style={myStyle} />
            <img src={w1} alt='w1' style={myStyle} />
          </Carousel>
          <ScrollAnimation
            animateIn='animate__fadeInTopRight'
            animateOnce={true}
            style={{ height: '100%', width: '50%', margin: '0 15px' }}>
            <h1>Medibond</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              quaerat, enim laudantium sapiente, eligendi reprehenderit corrupti
              error hic aspernatur omnis maiores aliquid dicta modi maxime
              tempore ad cum autem! Doloremque!
            </p>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
      <div className='work container'>
        <ScrollAnimation
          animateIn='animate__pulse'
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'row',
            alignContent: 'center',
            textAlign: 'center',
          }}>
          <ScrollAnimation
            animateIn='animate__fadeInTopLeft'
            animateOnce={true}
            style={{ height: '100%', width: '50%', margin: '0 15px' }}>
            <h1>Medibond</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              quaerat, enim laudantium sapiente, eligendi reprehenderit corrupti
              error hic aspernatur omnis maiores aliquid dicta modi maxime
              tempore ad cum autem! Doloremque!
            </p>
          </ScrollAnimation>
          <Carousel height='100%' width='50%'>
            <img src={w2} alt='w1' style={myStyle} />
            <img src={w2} alt='w1' style={myStyle} />
            <img src={w2} alt='w1' style={myStyle} />
          </Carousel>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ProjectsPage;

const myStyle = {
  height: '100%',
  width: '100%',
};
