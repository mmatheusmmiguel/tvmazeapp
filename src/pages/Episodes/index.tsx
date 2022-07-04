import React from 'react';
import {Dimensions, Linking} from 'react-native';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Info from '../../components/Info';
import constants from '../../constants';
import {EpisodeType} from '../../types';
import {
  Container,
  ContainerInfo,
  Divisor,
  ForegroundContainer,
  HeaderImage,
  Title,
} from '../Details/styles';

const Episode: React.FC = (details: {
  route: {
    params: EpisodeType;
  };
}) => {
  const episode: EpisodeType = details.route.params;
  const {width} = Dimensions.get('window');

  const openLinking = async (url: string) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <Container>
      <ImageHeaderScrollView
        maxHeight={constants.IMAGE_HEADER_HEIGHT}
        minHeight={90}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.4}
        fadeOutForeground
        scrollViewBackgroundColor={constants.COLORS.BLACK}
        renderHeader={() => (
          <HeaderImage
            source={{uri: episode.image?.original}}
            height={constants.IMAGE_HEADER_HEIGHT}
            width={width}
          />
        )}
        renderForeground={() => (
          <ForegroundContainer>
            <Title>{episode.name}</Title>
          </ForegroundContainer>
        )}>
        <TriggeringView>
          <Container>
            <ContainerInfo>
              <Info name="Duration" description={episode.runtime + ' min'} />
              <Divisor />
              <Info name="Number" description={episode.number} />
              <Divisor />
              <Info name="Season" description={episode.season} />
            </ContainerInfo>
            {episode?.summary && (
              <Card text={episode.summary} title={'Summary'} />
            )}
            <Button
              icon={'play-arrow'}
              buttonFontColor={constants.COLORS.WHITE}
              onPress={() => openLinking(episode?.url)}
              text={'WATCH ON TVMAZE'}
            />
          </Container>
        </TriggeringView>
      </ImageHeaderScrollView>
    </Container>
  );
};

export default Episode;
