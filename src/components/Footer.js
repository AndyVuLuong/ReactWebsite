import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Enter your email if you are interested in contacting me.
        </p>
        <p className='footer-subscription-text'>
          I will be in contact in the next 24-48 hours.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/sign-up'>Profile</Link>
            <Link to='/'>1st Year</Link>
            <Link to='/'>2nd Year</Link>
            <Link to='/'>3rd Year</Link>
            <Link to='/'>4th Year</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Languages</h2>
            <Link to='/'>Python and Java</Link>
            <Link to='/'>HTML, CSS, Javascript</Link>
            <Link to='/'>SQL</Link>
            <Link to='/'></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://www.linkedin.com/in/andy-luong-computer-scientist/" }} target="_blank">LinkedIn</Link>
            <Link to={{ pathname: "https://www.instagram.com/andwhyluong/" }} target="_blank">Instagram</Link>
            <Link to={{ pathname: "https://www.facebook.com/andy.luong.967" }} target="_blank">Facebook</Link>
            <Link to={{ pathname: "https://www.youtube.com/channel/UCh3hzSlmuEo9aRo2GYSjkag" }} target="_blank">YouTube</Link>
            <Link to={{ pathname: "https://github.com/AndyVuLuong/Tunderstom" }} target="_blank">GitHub</Link>         
             </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              A.V.L
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>A.V.L © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/andy.luong.967" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/andwhyluong/" }} 
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{ pathname: "https://www.youtube.com/channel/UCh3hzSlmuEo9aRo2GYSjkag" }}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://twitter.com/Tunderstom" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{pathname:'https://www.linkedin.com/in/andy-luong-computer-scientist/'}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
