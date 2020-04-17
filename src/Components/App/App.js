import React, {  Component } from 'react';
import './App.css';
import { fetchMakeupData } from '../../ApiCalls/AipCalls'
import MakeupContainer from '../MakeupContainer/MakeupContainer';
import Header from '../Header/Header';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMakeup } from '../../actions';
import { Route } from 'react-router-dom';
import MakeupDetail from '../MakeupDetail/MakeupDetail'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { getMakeup } = this.props
    fetchMakeupData()
      .then(makeupData => {
        getMakeup(makeupData)
      })
  }

  render() {
    return (
      <div className="App">
          <Header />
        <Route path='/' exact>
          <MakeupContainer />
        </Route>
        <Route path='/product/:product_id' exact component={MakeupDetail}>
        </Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({ getMakeup }, dispatch);


export default connect(null, mapDispatchToProps)(App);
