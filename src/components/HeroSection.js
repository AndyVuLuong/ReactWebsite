import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

//<video src='/videos/video-1.mp4' autoPlay loop muted />
//<img src='/images/SJSU.jpg' alt='SJSU'/>
function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/SJSU.jpg' alt='SJSU' />
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
          <Link to={{ pathname: "https://express.adobe.com/video/PaagwyRL13j55" }} target="_blank">Video About Me</Link>
        <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
