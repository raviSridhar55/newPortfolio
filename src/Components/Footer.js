import React from 'react';

import './CSS/skillsAndFooter.css';
const Footer = () => {
  const sendMail = () => {
    const mailto: string =
      'mailto:sridharravi55@gmail.com?subject=Test subject&body=Body content';
    window.location.href = mailto;
  };

  return (
    <div id='footer'>
      <div className='footer container'>
        <div className='social-icons'>
          <i class='fab fa-instagram p-3 '></i>

          <i class='fab fa-facebook-f p-3 '></i>
          <i onClick={sendMail} class='fas fa-at p-3 '></i>
          <i class='fab fa-linkedin-in p-3 '></i>
          <i class='fab fa-twitter p-3 '></i>
        </div>
        <div className='sign-off'>
          <p> &copy; Devarakonda Venkata Ravi Sridhar 🔥</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
