import React, { Component } from 'react';
import './MakeupDetails.css';
import { connect } from "react-redux";

class MakeupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  };

  componentDidMount() {
    const productId = this.props.match.params.product_id
    console.log(this.props)
    const foundProduct = this.props.makeup.find(product => product.id == productId)
    this.setState({product: foundProduct})
  }

  componentWillReceiveProps(nextProps) {
    const productId = nextProps.match.params.product_id
    const foundProduct = nextProps.makeup.find(product => product.id == productId)
    this.setState({product: foundProduct})
  }

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
        <p>Rating: {product.rating}</p>
      </div>
      <div>
        <h3 className='product-name'>{product.brand}</h3>
        <p>{product.name}</p>
        <p>{product.description}</p>
      </div>
    </div>
  };
};

const mapStateToProps = ({ makeup }) => ({
  makeup
});

export default connect(mapStateToProps)(MakeupDetail);