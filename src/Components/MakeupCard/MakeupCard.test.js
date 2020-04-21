import React from 'react';
import MakeupCard from './MakeupCard';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from '../../reducers';

describe('Makeup Card', () => {

it('should render text as we expect', () => {
  const store = createStore(RootReducer)
  const mockProduct = {
      id: 1,
      image_link: 'https://mocklink',
      brand: 'colourpop',
      name: 'Lippie Pencil'
    };

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <MakeupCard makeup={mockProduct}/>
        </Router>
      </Provider>
    );
    const brand = getByText('colourpop');
    const name = getByText('Lippie Pencil');
    expect(brand).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});