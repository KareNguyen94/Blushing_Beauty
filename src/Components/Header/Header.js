import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <header className='header'>
      <h1>BLUSHING BEAUTY</h1>
      <div>
        <Link
        to={'/favorites'}
        >
          <button 
          aria-label="Your favorite"
          className='fav-button'>💖Your Favorites!💖</button>
        </Link>
      </div>
      <p className='be-you'>BE YOU(tiful)</p>
    </header>
  );
};

export default Header;