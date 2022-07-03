import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import Details from '../../pages/Details';

const mockedDispatch = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe('Details Component', async () => {

  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it('Should render Header Component', async () => {

    const TVShowName = "The Powerpuff Girls";
    
    const { getByTestId, queryByTestId, getByText, findAllByTestId, debug } = render(<Details />);
    debug();
    


  });

})

