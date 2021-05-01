import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import working from '../GIFS/working.gif';

const Blogs = () => {
  return (
    <div className='blogs container'>
      <ScrollAnimation animateIn='animate__fadeInRight' animateOnce={true}>
        <img src={working} alt='working' />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn='animate__fadeInRight'
        animateOnce={true}
        className='aside'>
        <h2>Working on Blogs</h2>
        <h2>As my next project</h2>
      </ScrollAnimation>
    </div>
  );
};

export default Blogs;
