import React from 'react';
import loader from './loader.gif';
const Loader = () => {
  return (
    <div
      style={{
        height: '100vh',
        background: '#0b132b',
        margin: 'auto',
      }}>
      <img
        src={loader}
        alt='Loading...'
        style={{
          margin: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
};

export default Loader;
