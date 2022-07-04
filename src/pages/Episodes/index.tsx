import React from 'react';
import {Dimensions, Linking} from 'react-native';

import Button from '../../components/Button';
import Card from '../../components/Card';
import {ImageHeaderScrollView} from '../../components/ImageHeaderScrollView';
import Info from '../../components/Info';
import constants from '../../constants';
import {EpisodeType} from '../../@types';
import {
  Container,
  ContainerInfo,
  Divisor,
  ForegroundContainer,
  HeaderImage,
  Title,
} from '../Details/styles';

export function Episodes(details: any) {
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
        overlayColor={constants.COLORS.BLACK}
        maxHeight={constants.IMAGE_HEADER_HEIGHT}
        minHeight={90}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.4}
        renderFixedForeground={() => (
          <ForegroundContainer>
            <Title>{episode.name}</Title>
          </ForegroundContainer>
        )}
        renderHeader={() => (
          <HeaderImage
            source={{uri: episode.image?.original}}
            height={constants.IMAGE_HEADER_HEIGHT}
            width={width}
          />
        )}
        foregroundExtrapolate={'clamp'}
        scrollViewBackgroundColor={constants.COLORS.BLACK}
        useNativeDriver={true}
        foregroundParallaxRatio={0}
        ScrollViewComponent={() => <></>}>
        <Container>
          <ContainerInfo>
            <Info name="Duration" description={episode.runtime + ' min'} />
            <Divisor />
            <Info name="Number" description={String(episode.number)} />
            <Divisor />
            <Info name="Season" description={String(episode.season)} />
          </ContainerInfo>
          {episode?.summary && (
            <Card text={episode.summary} title={'Summary'} />
          )}
          <Button
            icon={'play-arrow'}
            buttonFontColor={constants.COLORS.WHITE}
            onPress={() => openLinking(String(episode?.url))}
            text={'WATCH ON TVMAZE'}
          />
        </Container>
      </ImageHeaderScrollView>
    </Container>
  );
}
