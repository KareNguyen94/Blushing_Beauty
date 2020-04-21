import React from 'react';
import Header from './Header';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { RootReducer } from '../../reducers';

describe('header', () => {
  it('should render text we expect', () => {
    const store = createStore(RootReducer)
    
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
      );
    const title = getByText('BLUSHING BEAUTY');
    const favorite = getByRole('button', {label: 'Your favorite'});
    expect(title).toBeInTheDocument();
    expect(favorite).toBeInTheDocument();
  });
});
