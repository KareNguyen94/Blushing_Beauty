import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import { mapDispatchToProps } from './App';
import { getMakeup, fetchError } from '../../actions';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from "../../reducers";
import { fetchMakeupData } from '../../ApiCalls/AipCalls';
jest.mock('../../ApiCalls/AipCalls')

describe('App', () => {
  let store, wrapper, initialState;
  beforeEach(async () => {
    jest.clearAllMocks();
    initialState = {
      error: {
        errorMessage: 'fetch failed',
        isError: true
      }
    };
    store = createStore(RootReducer, initialState);
    fetchMakeupData.mockResolvedValue({
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
      ]
    });
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
    let title = getByText('BLUSHING BEAUTY');
    expect(title).toBeInTheDocument();
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
