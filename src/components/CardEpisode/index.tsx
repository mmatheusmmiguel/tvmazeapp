import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import { EpisodeType } from '../../types';
import { CardEpisodeContainer, CardImageBackground, ImageOverlayView, DurationText, DurationTextContainer, TitleText, EpisodeNumberText } from './styles';

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
