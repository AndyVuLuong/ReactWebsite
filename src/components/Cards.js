import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import mobile_app from './images/mobile-app.jpg'
import titantic_dataset from './images/titanic-dataset.jpg'
import personal_website from './images/personal-website.png'
import { Link } from 'react-router-dom';
/*import professional_website from './images/professional-website.png'*/
import climate from './images/climate.png'
import unreal from './images/unreal.png'
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
              path='/products'
            />         
               
            <CardItem
              src={climate}
              text='Input & output global climate data in csv with Java'
              label='Main'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={mobile_app}
              text='Making a mobile app'
              label='Secondary'
              path='/products'
            />
            <CardItem
              src={personal_website}
              text='Developing a website through basic HTML, CSS, & Javascript'
              label='Secondary'
              path='/products'
            />
            <CardItem
              src={unreal}
              text='Coding a game using Unreal Engine 5'
              label='Secondary'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
