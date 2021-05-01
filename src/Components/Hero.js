import React, { Component } from 'react';
import Typical from 'react-typical';
import $ from 'jquery';
import './CSS/hero.css';
import ScrollAnimation from 'react-animate-on-scroll';
class Hero extends Component {
  componentDidMount() {
    $(document).ready(function () {
      $('.writing').mousemove(function (e) {
        var rXP = e.pageX - this.offsetLeft - $(this).width() / 2;
        var rYP = e.pageY - this.offsetTop - $(this).height() / 2;
        $('.writing').css(
          'text-shadow',
          +rYP / 10 +
            'px ' +
            rXP / 80 +
            'px rgba(227,6,19,.8), ' +
            rYP / 8 +
            'px ' +
            rXP / 60 +
            'px rgba(255,237,0,1), ' +
            rXP / 70 +
            'px ' +
            rYP / 12 +
            'px rgba(0,159,227,.7)'
        );
      });
    });
  }
  render() {
    return (
      <div className='hero'>
        <ScrollAnimation
          animateIn='animate__fadeInUp'
          animateOnce={true}
          className='name-l'>
          <div className='my-name'>
            <h1 className='writing'>Devarakonda</h1>
            <h1 className='writing'>Venkata</h1>
            <h1 className='writing'>Ravi</h1>
            <h1 className='writing'>Sridhar</h1>
          </div>
          <div className='my-title'>
            <h3 className='myself'>
              -{' '}
              <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                  'A Web Developer ❤️',
                  2000,
                  'A Student 🔥',
                  2000,
                  'A computer science engineer 🤟🏻',
                  2000,
                  'A Web Designer 👊🏻',
                  2000,
                ]}
              />
            </h3>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Hero;
