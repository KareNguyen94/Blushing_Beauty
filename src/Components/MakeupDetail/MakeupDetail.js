import React, { Component } from 'react';
import './MakeupDetails.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFavoriteProduct, removeFavoriteProduct, changeColor } from '../../actions';
import PropTypes from 'prop-types';

class MakeupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  };

  componentDidMount() {
    const productId = this.props.match.params.product_id
    const foundProduct = this.props.makeup.find(product => product.id == productId)
    this.setState({product: foundProduct})
  };

  componentWillReceiveProps(nextProps) {
    const productId = nextProps.match.params.product_id
    const foundProduct = nextProps.makeup.find(product => product.id == productId)
    this.setState({product: foundProduct})
  };

  onFavoriteClick(id) {
    let foundProduct = this.props.makeup.find(mu => mu.id == id)
    if(this.props.favorite.includes(foundProduct)) {
      this.props.removeFavoriteProduct(foundProduct)
      this.props.changeColor('fav-button2')
    } else {
      this.props.addFavoriteProduct(foundProduct)
      this.props.changeColor('background-pink')
    };
  };

  render() {
    const product = this.state.product;
    if(!product) {
      return <div>
        <p>Loading...</p>
      </div>
    } 
    return <div className='product-container'>
      <div>
        <img className='product-image' src={product.image_link}></img>
        <p>Price: ${product.price}</p>
        {!product.rating ? <p>Rating: Not yet rated.</p> : <p>Rating: {product.rating} out of 5</p>}
        <button 
        id={product.id} 
        aria-label="Favorite product"
        className={this.props.color}  
        onClick={(e) => this.onFavoriteClick(e.target.id)}>💖Favorite💖</button>
      </div>
      <div>
        <h3 className='product-name'>{product.brand}</h3>
        <p>{product.name}</p>
        <p>{product.description}</p>
      </div>
    </div>
  };
};

const mapStateToProps = (state) => ({
  makeup: state.makeup,
  favorite: state.favorite,
  color: state.color
});

export const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ addFavoriteProduct, removeFavoriteProduct, changeColor }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MakeupDetail);

MakeupDetail.propTypes = {
  makeup: PropTypes.array,
  favorites: PropTypes.array,
  onFavoriteClick: PropTypes.func
}