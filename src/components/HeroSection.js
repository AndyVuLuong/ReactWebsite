import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

//<video src='/videos/video-1.mp4' autoPlay loop muted />
function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/SJSU.jpg' alt='SJSU'/>
      <h1>Andy Luong</h1>
      <p>San Jose State University: Computer Science</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          About Me
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Video About Me <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
