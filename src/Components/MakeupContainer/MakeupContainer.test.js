import React from 'react';
import MakeupContainer from './MakeupContainer';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from '../../reducers';

describe('Makeup Container', () => {
  it('should render correctly', async () => {
    const initialState = {
     makeup: [{ 
      id: 1,
      image_link: 'https://mocklink',
      brand: 'colourpop',
      name: 'Lippie Pencil'
     }]
    };
    const store = createStore(RootReducer, initialState);
  
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
         <MakeupContainer />
       </Router>
     </Provider>
    );

    await waitFor(() => getByText('colourpop'));
    const image = getByAltText('makeup-image');
    const brand = getByText('colourpop');
    expect(image).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
  });
});