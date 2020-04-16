import React from 'react';
import './MakeupCard.css'

export const MakeupCard = ({makeup}) => {
  return(
    <article className='makeup-card'>
      <img className='makeup-image' src={makeup.image_link}></img>
      <h2>{makeup.brand}</h2>
      <h3 className='makeup-name'>{makeup.name}</h3>
    </article>
  );
};

export default MakeupCard;