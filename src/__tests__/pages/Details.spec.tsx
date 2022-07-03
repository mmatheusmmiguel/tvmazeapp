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

it('Check if Header is on document', async () => {

  const TVShowName = "The Powerpuff Girls";

  beforeEach(() => {
    mockedDispatch.mockClear();
  });
  
  const { getByTestId, queryByTestId, getByText } = render(<Details />);

  console.log(getByText(TVShowName));
});
