import React from 'react';
import MakeupCard from '../MakeupCard/MakeupCard';
import './MakeupContainer.css';

const MakeupContainer = ({allMakeup}) => {
  console.log(typeof(allMakeup))
  const cards = allMakeup.map(makeup => {
    return <MakeupCard key={makeup.id} makeup={makeup} />;
  });
  return(
  <section className='makeup-container'>{cards}</section>
  );
};

export default MakeupContainer;