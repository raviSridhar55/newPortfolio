import React from 'react';

import './CSS/skillsAndFooter.css';
const Footer = () => {
  return (
    <div id='footer'>
      <div className='footer container'>
        <div className='social-icons'>
          <i class='fab fa-instagram p-3 fa-2x'></i>
          <a style={{ color: 'white' }} href='tel:9819731748'>
            <i class='fab fa-whatsapp p-3 fa-2x'></i>
          </a>
          <i class='fab fa-facebook-f p-3 fa-2x'></i>
          <i class='fas fa-at p-3 fa-2x'></i>
          <i class='fab fa-linkedin-in p-3 fa-2x'></i>
          <i class='fab fa-twitter p-3 fa-2x'></i>
        </div>
        <div className='sign-off'>
          <p> Made By Devarakonda Venkata Ravi Sridhar 🔥</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
