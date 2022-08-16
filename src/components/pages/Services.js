import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default function Services() {
  return <h1 className='products'> <Link to={{ pathname: "https://catalog.sjsu.edu/preview_program.php?catoid=12&poid=3740" }} target="_blank">Courses</Link>
   Courses </h1>;  
}
