import React from 'react';
import {
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor,
} from '@testing-library/react-native';
import Details from '../../pages/Details';
import 'jest-styled-components';
import {HeaderImage, Title} from '../../pages/Details/styles';
import constants from '../../constants';
import AvatarList from '../../components/AvatarList';
import {IGetCast} from '../../services/Cast';
import {EpisodeType} from '../../types';
import CardEpisode from '../../components/CardEpisode';

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

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => {
    const { View } = require('react-native')
    const MockTouchable = props => {
      return <View {...props} />
    }
    MockTouchable.displayName = 'TouchableOpacity'

    return MockTouchable
  }
)

describe('Details Component', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it('Should render Header Component', async () => {
    const TVShowName: string = 'The Powerpuff Girls';

    const headerImage = render(
      <HeaderImage
        source={{
          uri: 'https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg',
        }}
        height={constants.IMAGE_HEADER_HEIGHT}
      />,
    ).toJSON();

    const headerTitle = render(<Title>{TVShowName}</Title>);

    expect(headerImage).toBeTruthy();
    expect(headerTitle.getByText(TVShowName)).toBeTruthy();
  });

  it('Should has Cast List and render', () => {
    const castList: IGetCast[] = [
      {
        person: {
          id: 1,
          url: '',
          name: 'Matheus',
          birthday: '1999-05-29',
          gender: 'Male',
          country: {
            name: 'Brazil',
            code: 'BR',
          },
          image: {
            medium: '',
            original: '',
          },
        },
        character: {
          id: 1,
          url: '',
          name: 'Matheus',
          image: '',
        },
      },
    ];
    const {queryAllByText} = render(<AvatarList dataSource={castList} />);

    expect(castList.length).toBeGreaterThan(0);
    expect(screen.queryAllByText('Matheus')).toBeTruthy();
  });

  it('Should has a Episode List', async () => {
    const navigate = jest.fn();
    
    const episodesList: EpisodeType[] = [
      {
        id: 1,
        image: {
          original: '',
          medium: '',
        },
        name: '',
        number: 1,
        rating: {
          average: 10,
        },
        runtime: 10,
        season: 1,
        summary: 'Teste',
      },
    ];
    expect(episodesList.length).toBeGreaterThan(0);
    const cardEpisode: RenderResult = render(
      <CardEpisode
        key={episodesList[0].id}
        title={episodesList[0].name}
        cardImage={episodesList[0].image?.original}
        number={episodesList[0]?.number}
        duration={episodesList[0]?.runtime}
        onPress={() => {
          expect(screen.toJSON()).toMatchSnapshot()
        }}
      />
    );

    await waitFor(() => expect(cardEpisode).toBeTruthy())
    fireEvent.press(cardEpisode.toJSON());
  });
});
