import React from 'react';
import './MakeupCard.css'

export const MakeupCard = ({makeup}) => {
  return(
    <article className='makeup-card'>
      <img className='makeup-image' src={makeup.image_link}></img>
      <h3>{makeup.brand}</h3>
      <p className='makeup-name'>{makeup.name}</p>
    </article>
  );
};

export default MakeupCard;