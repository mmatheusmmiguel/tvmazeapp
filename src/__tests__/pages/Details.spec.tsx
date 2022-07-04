import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  fireEvent,
  render,
  RenderResult,
  screen,
  waitFor,
} from '@testing-library/react-native';
import 'jest-styled-components';
import React from 'react';
import { ReactTestInstance } from 'react-test-renderer';
import AvatarList from '../../components/AvatarList';
import CardEpisode from '../../components/CardEpisode';
import constants from '../../constants';
import * as AppContext from '../../contexts/AppContext';
import {HeaderImage, Title} from '../../pages/Details/styles';
import {RootStackParamList} from '../../routes/stack.routes';
import {IGetCast} from '../../services/Cast';
import {EpisodeType} from '../../types';

const mockedDispatch = jest.fn();
const mockedNavigate = jest.fn();
type detailScreenProps = StackNavigationProp<RootStackParamList, 'Details'>;

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      dispatch: mockedDispatch,
    }),
  };
});

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity',
);

describe('Details Component', () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });

  it('Should render Header Component', async () => {

    const contextValues = {loaded: false};
    jest
      .spyOn(AppContext, 'useAppContext')
      .mockImplementation(() => contextValues);

    await waitFor(() => expect(contextValues.loaded).not.toBeTruthy());

    const TVShowName: string = 'The Powerpuff Girls';

    const headerImage = render(
      <HeaderImage
        source={{
          uri: 'https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg',
        }}
        height={constants.IMAGE_HEADER_HEIGHT}
      />,
    ).toJSON();

    const headerTitle: RenderResult = render(<Title>{TVShowName}</Title>);

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
    render(<AvatarList dataSource={castList} />);

    expect(castList.length).toBeGreaterThan(0);
    expect(screen.queryAllByText('Matheus')).toBeTruthy();
  });

  it('Should has a Episode List and Click', async () => {
    let navigation = useNavigation<detailScreenProps>();

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
        item={episodesList[0]}
        onPress={() => { 
          if(episodesList.length) {
            navigation.navigate('Episodes', episodesList[0] as any)  
          }
        }}
      />,
    );

    await waitFor(() => expect(cardEpisode).toBeTruthy());
    fireEvent.press(cardEpisode.toJSON() as ReactTestInstance);
    await waitFor(() =>
      expect(navigation.navigate).toHaveBeenCalledWith(
        'Episodes',
        episodesList[0],
      ),
    );
  });
});
