import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import VisitingCard from '../img/VisitingCard.png';
//  import Loader from '../Loader';

// const openInNewTab = (url) => {
//   const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
//   if (newWindow) newWindow.opener = null;
// };

const About = () => {
  return (
    <div id='contact'>
      <section className='contact'>
        <ScrollAnimation
          animateIn='animate__fadeInRight'
          animateOnce={true}
          className='container contact-content'>
          <div className='message-me'>
            <div className='connect'>
              <h1>How's been this far??</h1>
              <h1>Don't Hesitate, lets connect...</h1>
              <div className='underline'></div>
            </div>
            <img src={VisitingCard} alt='cvard' />
          </div>
          <div className='form-me'>
            <form className='form'>
              <div className='form-group'>
                <label htmlFor='Name'>Name</label>
                <input type='text' name='name' />
              </div>
              <div className='form-group'>
                <label htmlFor='Email'>E-mail</label>
                <input type='email' name='email' />
              </div>
              <div className='form-group'>
                <label htmlFor='Email'>Purpose</label>
                <select
                  className='form-select'
                  aria-label='Default select example'>
                  <option value='1' defaultValue>
                    General
                  </option>
                  <option value='2'>Collaboration</option>
                  <option value='3'>Sponsorship</option>
                </select>
              </div>
              <div className='form-group'>
                <label for='floatingTextarea2'>Message</label>
                <textarea
                  className='form-control'
                  placeholder='Leave a message here'
                  id='floatingTextarea2'
                  style={{ height: '100px' }}></textarea>
                <button class='custom-btn bttn'>
                  <span>Submit</span>
                </button>
              </div>
              <div className='form-group'></div>
            </form>
          </div>
        </ScrollAnimation>
      </section>
      <section className='contact-more'>
        <h1>Follow Me on</h1>
        <div className='follow-more-container container'>
          <div className='follow-more-card'>
            <a
              className='follow-more-profile'
              href='https://codepen.io/ravisridhar55'>
              @ravisridhar55
            </a>
            <div className='icon-social'>
              <i className='fab fa-codepen fa-4x'></i>
            </div>
            <p className='desc-social'>This is where I share my designs</p>
          </div>
          <div className='follow-more-card'>
            <a
              href='https://www.hackerrank.com/dr7461'
              className='follow-more-profile'>
              @dr7461
            </a>
            <div className='icon-social'>
              <i className='fab fa-hackerrank fa-4x'></i>
            </div>
            <p className='desc-social'>This is where I practice my coding</p>
          </div>
          <div className='follow-more-card'>
            <a
              href='https://github.com/raviSridhar55'
              className='follow-more-profile'>
              @raviSridhar55
            </a>
            <div className='icon-social'>
              <i className='fab fa-github fa-4x'></i>
            </div>
            <p className='desc-social'>This is where I save My codes</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
