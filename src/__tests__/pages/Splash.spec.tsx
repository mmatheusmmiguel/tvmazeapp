import {render} from '@testing-library/react-native';
import React from 'react';
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

  const {getByTestId} = render(<Splash />);
  expect(getByTestId('splash_lottie')).toBeTruthy();
});
