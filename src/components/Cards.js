import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out My Awesome Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Database project storing information'
              label='Main'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Building a professional website through React'
              label='Main'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Making a mobile app'
              label='Secondary'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Developing a website through basic HTML, CSS, & Javascript'
              label='Secondary'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
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
