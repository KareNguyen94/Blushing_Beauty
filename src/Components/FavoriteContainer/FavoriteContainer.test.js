import React from 'react';
import FavoriteContainer from './FavoriteContainer';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from '../../reducers';

describe('Favorite Container', () => {
  it('should render correctly', () => {
    const initialState = {
      favorite: [{
        id: 1,
        image_link: 'https://mocklink',
        brand: 'colourpop',
        name: 'Lippie Pencil'
      }]
    };
    const store = createStore(RootReducer, initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Router>
         <FavoriteContainer />
       </Router>
     </Provider>
    );

    const name = getByText('Lippie Pencil');
    expect(name).toBeInTheDocument();
  });

  it('should render message when there are no favorites', () => {
    const initialState = {
      favorite: []
    };
    const store = createStore(RootReducer, initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Router>
         <FavoriteContainer />
       </Router>
     </Provider>
    );

    const message = getByText('No favorites yet 🥺');
    expect(message).toBeInTheDocument();
  });
});