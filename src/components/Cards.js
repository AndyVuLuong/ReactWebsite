import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import mobile_app from './images/mobile-app.jpg'
import titantic_dataset from './images/titanic-dataset.jpg'
import personal_website from './images/personal-website.png'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out My Awesome Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={titantic_dataset}
              text='Database project storing info'
              label='Main'
              path='/services'
            />
            <CardItem
              src='./images/img-2.jpg'
              text='Building a professional website through React'
              label='Main'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={mobile_app}
              text='Making a mobile app'
              label='Secondary'
              path='/services'
            />
            <CardItem
              src={personal_website}
              text='Developing a website through basic HTML, CSS, & Javascript'
              label='Secondary'
              path='/products'
            />
            <CardItem
              src='./images/img-8.jpg'
              text='Coding a game under Unreal Engine 5'
              label='Secondary'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
