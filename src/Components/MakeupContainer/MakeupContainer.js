import React from 'react';
import MakeupCard from '../MakeupCard/MakeupCard';
import './MakeupContainer.css';
import { connect } from "react-redux";
import brushes from '../../assets/brushes.png';
import eyeshadow from '../../assets/eyeshadow.png';
import lips from '../../assets/lips.png';
import nailPolish from '../../assets/nail-polish.png';
import powder from '../../assets/single-pot.png';

const MakeupContainer = (makeup) => {
  const cards = makeup.makeup.map(mu => {
    return <MakeupCard key={mu.id} makeup={mu} />;
  });
  return(
    <div>
      <div className='image-container'>
        <div className='header-images'>
        <div className='photo-div'>
          <img className='photo' src={brushes}></img>
          <img className='photo' src={powder}></img>
        </div>
        <div>
          <img 
          className='photo-lips' 
          src={lips}
          alt='makeup-image'
          ></img>
        </div>
        <div className='photo-div'>
          <img className='photo' src={nailPolish}></img>
          <img className='photo' src={eyeshadow}></img>
        </div>
        </div>
      </div>
    <section className='makeup-container'>{cards}</section>
  </div>
  );
};

const mapStateToProps = ({makeup}) => ({
  makeup,
});


export default connect(mapStateToProps)(MakeupContainer);