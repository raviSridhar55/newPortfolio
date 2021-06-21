import React, { useState } from 'react';
import logo from './img/logo.png';
import './CSS/Navbar.css';
import { Link } from 'react-router-dom';

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
          {inHover && <Link to='/project-page'>Projects</Link>}
        </div>
        <div
          className='box-2'
          onMouseEnter={() => setHover1(true)}
          onMouseLeave={() => setHover1(false)}>
          {inHover1 && <Link to='/blogs'>Blogs</Link>}
        </div>
        <div
          className='box-3'
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}>
          {inHover2 && <Link to='/about-me'>Contact</Link>}
        </div>
      </nav>

      <nav className='navbar-h'>
        <a href='/'>
          <img className='logo' src={logo} alt='logo' />
        </a>
        {/* <div class='menu-wrap'>
          <input type='checkbox' class='toggler' />
          <div class='hamburger'>
            <div></div>
          </div>
          <div class='menu'>
            <div>
              <div>
                <ul>
                  <li>
                    <Link to='/project-page'>Projects</Link>
                  </li>
                  <li>
                    <Link to='/blogs'>Blogs</Link>
                  </li>
                  <li>
                    <Link to='/about-me'>Contact Me</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
