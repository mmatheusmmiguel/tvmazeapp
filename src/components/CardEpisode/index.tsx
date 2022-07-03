import React from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import { CardEpisodeContainer, CardImageBackground, ImageOverlayView, DurationText, DurationTextContainer, TitleText, EpisodeNumberText } from './styles';

interface CardEpisodeProps {
  title?: string;
  cardImage: string;
  number: number;
  imageOverlayOpacity?: number;
  duration?: string | number;
  onPress: Function;
}

export function CardEpisode({
  title,
  cardImage,
  duration,
  onPress,
  number,
  imageOverlayOpacity,
}: CardEpisodeProps) {
  return (
    <CardEpisodeContainer onPress={onPress}>
      <CardImageBackground
        source={{uri: cardImage}}
        imageStyle={{borderRadius: 8}}>
        <ImageOverlayView opacity={imageOverlayOpacity} />
        <DurationTextContainer>
          <DurationText>{duration} min</DurationText>
        </DurationTextContainer>
      </CardImageBackground>
      <EpisodeNumberText>EPISODE {number}</EpisodeNumberText>
      <TitleText>{title}</TitleText>
    </CardEpisodeContainer>
  );
}

export default CardEpisode;
