import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import {RootStackParamList} from '../../routes/stack.routes';
import DetailsService, {IGetDetails} from '../../services/Details';
import CastService, {IGetCast} from '../../services/Cast';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppContext} from '../../contexts/AppContext';
import {useNavigation} from '@react-navigation/native';
import Card from '../../components/Card';
import {Avatar} from '../../components/Avatar';
import AvatarList from '../../components/AvatarList';
import GenreList from '../../components/GenreList';
import CardEpisode from '../../components/CardEpisode';
import Info from '../../components/Info';
import {
  Container,
  ContainerInfo,
  Divisor,
  HeaderImage,
  TextDetails,
  ForegroundContainer,
  Title,
  SeasonsContainer,
  TextSeason,
  ContainerCardEpisodeScrollView,
} from './styles';
import constants from '../../constants';
import {SeasonType} from '../../types';
import LottieView from 'lottie-react-native';
import {LottieContainer, SplashContainer} from '../Splash/styles';

type detailScreenProps = StackNavigationProp<RootStackParamList, 'Details'>;

const Details: React.FC = () => {
  const {list, loaded, setLoaded, castList} = useContext(AppContext);
  const [seasons, setSeasons] = useState<SeasonType[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<SeasonType>(1);

  const {width} = Dimensions.get('window');

  const navigation = useNavigation<detailScreenProps>();

  const scrollRef = useRef<null>();

  useEffect(() => {
    setSeasons([
      ...new Set(list?._embedded?.episodes?.map(item => item.season)),
    ]);
  }, [list]);

  const handleChangeSeason = async (season: SeasonType) => {
    setSelectedSeason(season);
    scrollRef.current?.scrollTo({x: 0, y: 0}, true);
  };

  return (
    <Container>
      {!loaded && (
        <SplashContainer>
          <LottieContainer>
            <LottieView
              testID={'details_loading'}
              source={require('../../assets/lottie/loading.json')}
              autoPlay
              loop
            />
          </LottieContainer>
        </SplashContainer>
      )}
      {loaded && (
        <ImageHeaderScrollView
          maxHeight={constants.IMAGE_HEADER_HEIGHT}
          minHeight={90}
          maxOverlayOpacity={0.6}
          minOverlayOpacity={0.4}
          fadeOutForeground
          scrollViewBackgroundColor={constants.COLORS.BLACK}
          renderHeader={() => (
            <HeaderImage
              source={{uri: list.image?.original}}
              height={constants.IMAGE_HEADER_HEIGHT}
              width={width}
            />
          )}
          renderForeground={() => (
            <ForegroundContainer>
              <Title>{list.name?.toUpperCase()}</Title>
            </ForegroundContainer>
          )}>
          <TriggeringView>
            <ContainerInfo>
              <Info
                name="Rating"
                icon={'star'}
                iconSize={14.5}
                description={list.rating?.average}
              />
              <Divisor />
              <Info name="Network" description={list.network?.name} />
              <Divisor />
              <Info name="Country" description={list.network?.country?.code} />
            </ContainerInfo>
            <Container>
              <GenreList dataSource={list?.genres} />
              <Card title={'About'} text={list?.summary} />
              <TextDetails>Seasons</TextDetails>
              <ScrollView horizontal>
                {seasons?.map((i: SeasonType) => (
                  <SeasonsContainer
                    onPress={() => handleChangeSeason(i)}
                    key={i}
                    backgroundColor={
                      selectedSeason == i
                        ? constants.COLORS.RED
                        : constants.COLORS.BLACK
                    }>
                    <TextSeason>{i}</TextSeason>
                  </SeasonsContainer>
                ))}
              </ScrollView>

              <ContainerCardEpisodeScrollView ref={scrollRef} horizontal>
                {list._embedded?.episodes
                  ?.filter(i => i.season === selectedSeason)
                  .map(item => (
                    <CardEpisode
                      key={item.id}
                      item={item}
                      onPress={() => {
                        navigation.navigate('Episodes', item);
                      }}
                    />
                  ))}
              </ContainerCardEpisodeScrollView>
              <TextDetails>Cast & Crew</TextDetails>
              <AvatarList horizontal={true} dataSource={castList} />
            </Container>
          </TriggeringView>
        </ImageHeaderScrollView>
      )}
    </Container>
  );
};

export default Details;
