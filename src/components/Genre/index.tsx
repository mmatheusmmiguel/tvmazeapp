import React from 'react';
import {GenreContainer, GenreText} from './styles';

interface GenreItemProps {
  text: string;
  backgroundColor?: string;
  genreFontSize?: number;
  genreFontColor?: string;
}

export function Genre({
  text,
  backgroundColor,
  genreFontSize,
  genreFontColor,
}: GenreItemProps) {
  return (
    <GenreContainer backgroundColor={backgroundColor}>
      <GenreText fontSize={genreFontSize} fontColor={genreFontColor}>
        {text}
      </GenreText>
    </GenreContainer>
  );
}

export default Genre;
