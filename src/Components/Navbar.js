import React, { useState } from 'react';
import logo from './img/logo.png';
import './CSS/Navbar.css';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [inHover, setHover] = useState(false);
  const [inHover1, setHover1] = useState(false);
  const [inHover2, setHover2] = useState(false);

  return (
    <div className='nav'>
      <nav className='navbar-v'>
        <div
          className='box-1'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          {inHover && <a href='/project-page'>Projects</a>}
        </div>
        <div
          className='box-2'
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}>
          {inHover1 && <a href='/blogs'>Blogs</a>}
        </div>
        <div
          className='box-3'
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}>
          {inHover2 && <a href='/about-me'>About</a>}
        </div>
      </nav>

      <nav className='navbar-h'>
        <a href='/'>
          <img className='logo' src={logo} alt='logo' />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
