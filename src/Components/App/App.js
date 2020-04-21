import React, {  Component } from 'react';
import './App.css';
import { fetchMakeupData } from '../../ApiCalls/AipCalls';
import MakeupContainer from '../MakeupContainer/MakeupContainer';
import Header from '../Header/Header';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getMakeup, fetchError } from '../../actions';
import { Route } from 'react-router-dom';
import MakeupDetail from '../MakeupDetail/MakeupDetail';
import FavoriteContainer from '../FavoriteContainer/FavoriteContainer';

class App extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount = () => {
    const { getMakeup, fetchError } = this.props
    fetchMakeupData()
      .then(makeupData => {
        getMakeup(makeupData)
      })
      .catch(errorMessage => {
       fetchError(errorMessage.message)
      })
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/' exact>
          {!this.props.error.isError ? <MakeupContainer /> : <h2>ERROR: {this.props.error.errorMessage} </h2>}
        </Route>
        <Route path='/product/:product_id' exact component={MakeupDetail}>
        </Route>
        <Route path='/favorites' exact>
          <FavoriteContainer />
        </Route>
      </div>
    );
  };
};

export const mapDispatchToProps = (dispatch) => bindActionCreators({ getMakeup, fetchError }, dispatch);

const mapStateToProps = ({error}) => ({
  error
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
