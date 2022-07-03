import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Splash from '../../pages/Splash';

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


it('Check if Lottie is on document', () => {
  
  beforeEach(() => {
    mockedDispatch.mockClear();
  });


  const { getByTestId, queryByTestId } = render(<Splash />)
  expect(getByTestId('splash_lottie').toBeInTheDocument);
});
