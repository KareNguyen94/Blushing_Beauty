import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of GET_MAKEUP and a correct payload', () => {
    const expectedAction = {
      type: 'GET_MAKEUP',
      makeup: [{
        id: 1,
        image_link: 'https://mocklink',
        brand: 'colourpop',
        name: 'Lippie Pencil',
      },
      {
        id: 2,
        image_link: 'https://mocklink',
        brand: 'mockBrand',
        name: 'mockName',
      }
      ]
    };

    const result = actions.getMakeup([{
      id: 1,
      image_link: 'https://mocklink',
      brand: 'colourpop',
      name: 'Lippie Pencil',
    },
    {
      id: 2,
      image_link: 'https://mocklink',
      brand: 'mockBrand',
      name: 'mockName',
    }
  ])
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SHOW_DETAIL and a correct payload', () => {
    const expectedAction = {
      type: 'SHOW_DETAIL',
      id: 1
    };

    const result = actions.showMakeupDetail(1)
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_FAVORITE and a correct payload', () => {
    const expectedAction = {
      type: 'ADD_FAVORITE',
      makeup: [{
        id: 1,
        image_link: 'https://mocklink',
        brand: 'colourpop',
        name: 'Lippie Pencil',
      },
      {
        id: 2,
        image_link: 'https://mocklink',
        brand: 'mockBrand',
        name: 'mockName',
      }
      ]
    };

    const result = actions.addFavoriteProduct([{
      id: 1,
      image_link: 'https://mocklink',
      brand: 'colourpop',
      name: 'Lippie Pencil',
    },
    {
      id: 2,
      image_link: 'https://mocklink',
      brand: 'mockBrand',
      name: 'mockName',
    }
  ])
    expect(result).toEqual(expectedAction);
  });
});