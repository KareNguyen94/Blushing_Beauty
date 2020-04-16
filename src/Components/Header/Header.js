import React from 'react';
import './Header.css';
import brushes from '../../assets/brushes.png';
import eyeshadow from '../../assets/eyeshadow.png';
import lips from '../../assets/lips.png';
import nailPolish from '../../assets/nail-polish.png';
import powder from '../../assets/single-pot.png';

const Header = () => {
  return(
    <header className='header'>
      <h1>BLUSHING BEAUTY</h1>
      <p className='be-you'>BE YOU(tiful)</p>
      <div className='header-images'>
        <div className='photo-div'>
          <img className='photo' src={brushes}></img>
          <img className='photo' src={powder}></img>
        </div>
        <div>
          <img className='photo-lips' src={lips}></img>
        </div>
        <div className='photo-div'>
          <img className='photo' src={nailPolish}></img>
          <img className='photo' src={eyeshadow}></img>
        </div>
      </div>
    </header>
  );
};

export default Header;