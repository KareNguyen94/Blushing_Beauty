import React from 'react';
import './MakeupCard.css';
import { Link } from "react-router-dom";

const MakeupCard = ({makeup}) => {

  return(
    <Link
      to={'/product/' + makeup.id}
    >
      <article key={makeup.id} id={makeup.id} className='makeup-card'>
        <img className='makeup-image' src={makeup.image_link}></img>
        <h3>{makeup.brand}</h3>
        <p className='makeup-name'>{makeup.name}</p>
      </article>
    </Link>
  );
};

export default (MakeupCard);