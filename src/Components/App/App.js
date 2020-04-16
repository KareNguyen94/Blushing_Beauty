import React, {  Component } from 'react';
import './App.css';
import { fetchMakeupData } from '../../ApiCalls/AipCalls'
import MakeupContainer from '../MakeupContainer/MakeupContainer';
import Header from '../Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMakeup: []
    }
  }

  componentDidMount = () => {
    fetchMakeupData()
      .then(makeupData => this.setState({allMakeup:  [...makeupData]}))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MakeupContainer allMakeup={this.state.allMakeup}/>
      </div>
    );
  }
}


export default App;
