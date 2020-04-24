import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import { mapDispatchToProps } from './App';
import { getMakeup, fetchError } from '../../actions';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from "../../reducers";
import { fetchMakeupData } from '../../ApiCalls/AipCalls';
// jest.mock('../../ApiCalls/AipCalls')÷\

describe('App', () => {
  let store, wrapper, initialState;
  beforeEach(async () => {
    jest.clearAllMocks();
    initialState = {
      makeup: [
        {
          id: 1,
          image_link: 'https://mockUrl',
          brand: 'mockBrand',
          name: 'mockName'
        },
        {
          id: 2,
          image_link: 'https://mockUrl',
          brand: 'mockBrand2',
          name: 'mockName2'
        },
      ],
      error: {
        errorMessage: '',
        isError: false
      },
      favorite: [
        {
          id: 1,
          image_link: 'https://mockUrl',
          brand: 'mockBrand',
          name: 'mockName'
        }
      ]
    };
    store = createStore(RootReducer, initialState);
    // await fetchMakeupData.mockResolvedValue([
    // ]);
    const history = createMemoryHistory();
    wrapper =
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
  });

  it('can render the App', () => {
    const{ getByText } = render(wrapper);
    const title = getByText('BLUSHING BEAUTY');
    expect(title).toBeInTheDocument();
  });

  it('should be able to view favorites', async () => {
    const{ getByText, getByRole } = render(wrapper);
     await waitFor(() => {       
     expect(getByText('💖Your Favorites!💖')).toBeInTheDocument()
     fireEvent.click(getByText('💖Your Favorites!💖'))
    });
    // waiting for button to click and finish
   
  const brand = getByText('mockBrand');
  expect(brand).toBeInTheDocument();
  });

  it('should be able to view product', async () => {
    const{ getByText, getByRole } = render(wrapper);

    await waitFor(() => {
      expect(getByText('mockBrand')).toBeInTheDocument()
    });

    const brand = getByText('mockBrand');
    expect(brand).toBeInTheDocument();
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch getMakeup', () => {
    const mockDispatch = jest.fn();
    const mockMakeup = [{
      id: 1,
      image_link: 'https://mocklink',
      brand: 'colourpop',
      name: 'Lippie Pencil'
    }]
    const actionToDispatch = getMakeup(mockMakeup);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getMakeup(mockMakeup);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  
  it('should call dispatch fetchError', () => {
    const mockDispatch = jest.fn();
    const mockError = {
      errorMessage: 'failed to fetch',
      isError: true
    }
    const actionToDispatch = fetchError(mockError);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchError(mockError);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
