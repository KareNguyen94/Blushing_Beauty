import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import MakeupDetail from './MakeupDetail';
import { mapDispatchToProps } from './MakeupDetail';
import {  addFavoriteProduct, removeFavoriteProduct, changeColor } from '../../actions';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { RootReducer } from '../../reducers';

describe('Makeup Detail', () => {
  let match, initialState, wrapper, store;
  beforeEach(() => {
    match = {
      params: {
        product_id: 1
      }
    };

    initialState = {
      makeup: [
      { 
       id: 1,
       image_link: 'https://mocklink',
       price: 5.0,
       rating: 4,
       brand: 'colourpop',
       name: 'Lippie Pencil',
       description: 'Lip pencil'
      },
      { 
        id: 2,
        image_link: 'https://mocklink',
        price: 2.0,
        rating: 2,
        brand: 'mockBrand',
        name: 'mockName',
        description: 'mockDescription'
       }
    ],
      favorite: [{
       id: 2,
       image_link: 'https://mocklink',
       price: 5.0,
       rating: 4,
       brand: 'colourpop',
       name: 'Lippie Pencil',
       description: 'Lip pencil'
      }]
     };
     store = createStore(RootReducer, initialState);

     wrapper = (
       <Provider store={store}>
        <MemoryRouter initialEntries={["/product/:product_id"]}>
          <MakeupDetail match={match} />
        </MemoryRouter>
      </Provider>
     );

  });
  it('should render correctly', async () => {

    const { getByText } = render(wrapper);

    await waitFor(() => getByText('colourpop'));
    const brand = getByText('colourpop');
    const name = getByText('Lippie Pencil');
    expect(brand).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('should show message if there is no product', () => {
    const match = {
      params: {
        product_id: 1
      }
    };

    initialState = {
      makeup: [],
  };
    store = createStore(RootReducer, initialState);

    wrapper = (
      <Provider store={store}>
      <MemoryRouter initialEntries={["/product/:product_id"]}>
        <MakeupDetail match={match} />
      </MemoryRouter>
    </Provider>
    );

    const { getByText } = render(wrapper);

    const message = getByText('Loading...')
    expect(message).toBeInTheDocument();
  });

  it('should let a user add product to favorites', async () => {

    const { getByRole } = render(wrapper);

    let clickFavorite;
    await waitFor(() => {
      clickFavorite = getByRole('button', {className: 'Favorite product'})
    })
    fireEvent.click(clickFavorite)
    expect(clickFavorite).toHaveClass('background-pink')
  });

  // it('should let a user remove product from favorites', async () => {

  //   const { getByRole } = render(wrapper);

  //   let clickFavorite;
  //   await waitFor(() => {
  //     clickFavorite = getByRole('button', {className: 'Favorite product'});
  //   });
  //   expect(clickFavorite).toHaveClass('background-pink');
  //   fireEvent.click(clickFavorite);
  //   expect(clickFavorite).toHaveClass('fav-button2');
  // });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch addFavoriteProduct', () => {
    const mockDispatch = jest.fn();
    const mockAddFav = [{
      id: 1,
      image_link: 'https://mocklink',
      brand: 'colourpop',
      name: 'Lippie Pencil'
    }]
    const actionToDispatch = addFavoriteProduct(mockAddFav);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addFavoriteProduct(mockAddFav);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch removeFavoriteProduct', () => {
    const mockDispatch = jest.fn();
    const mockRemoveFav = []
    const actionToDispatch = removeFavoriteProduct(mockRemoveFav);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeFavoriteProduct(mockRemoveFav);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch changeColor', () => {
    const mockDispatch = jest.fn();
    const mockChangeColor = 'background-pink'
    const actionToDispatch = changeColor(mockChangeColor);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.changeColor(mockChangeColor);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
