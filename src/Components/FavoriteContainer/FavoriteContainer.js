import React, { Component } from 'react';
import './FavoriteContainer.css';
import { connect } from 'react-redux';
import MakeupCard from '../MakeupCard/MakeupCard';
import PropTypes from 'prop-types';

class FavoriteContainer extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    if(this.props.favorite.length === 0) {
      return(
        <div>
          <h3>No favorites yet 🥺</h3>
        </div>
      );
    }
    return(
      <section>
        <h3>Favorites</h3>
        <div className='fav-container'>
          {this.props.favorite.map(product => {
            return <MakeupCard key={product.id} makeup={product}/>
          })}
        </div>
      </section>
    );
  };
};

const mapStateToProps = (state) => ({
  favorite: state.favorite,
});

export default connect(mapStateToProps)(FavoriteContainer);
