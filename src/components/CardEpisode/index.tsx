import React from 'react';
import {EpisodeType} from '../../@types';
import {
  CardEpisodeContainer,
  CardImageBackground,
  DurationText,
  DurationTextContainer,
  EpisodeNumberText,
  ImageOverlayView,
  TitleText,
} from './styles';

interface CardEpisodeProps {
  item: EpisodeType;
  imageOverlayOpacity?: number;
  onPress: Function;
}

export function CardEpisode({
  item,
  onPress,
  imageOverlayOpacity,
}: CardEpisodeProps) {
  return (
    <CardEpisodeContainer onPress={onPress}>
      <CardImageBackground
        source={{uri: item.image?.original}}
        imageStyle={{borderRadius: 8}}>
        <ImageOverlayView opacity={imageOverlayOpacity} />
        <DurationTextContainer>
          <DurationText>{item.runtime} min</DurationText>
        </DurationTextContainer>
      </CardImageBackground>
      <EpisodeNumberText>EPISODE {item.number}</EpisodeNumberText>
      <TitleText>{item.name}</TitleText>
    </CardEpisodeContainer>
  );
}

export default CardEpisode;
