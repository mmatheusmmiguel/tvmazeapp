import React from 'react';
import {Text, View} from 'react-native';
import { GenreContainer, GenreText } from './styles';

interface GenreItemProps {
  text: string;
  backgroundColor?: string;
}

export function Genre({text, backgroundColor, genreFontSize, genreFontColor}: GenreItemProps) {
  return (
    <GenreContainer>
      <GenreText>{text}</GenreText>
    </GenreContainer>
  );
}

export default Genre;
