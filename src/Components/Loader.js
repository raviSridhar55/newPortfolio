import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import loader from './loader.gif';
const Loader = () => {
  return (
    <ScrollAnimation animateIn='animate__pulse' duration='2' style={style}>
      <img
        src={loader}
        alt='Loading...'
        style={{
          height: '90%',
          margin: 'auto',
          display: 'block',
        }}
      />
    </ScrollAnimation>
  );
};

export default Loader;

const style = {
  height: '90vh',
  width: '90vw',
  margin: 'auto',
  background: '#0b132b',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};
