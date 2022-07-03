import React from 'react';
import {Text, View} from 'react-native';
import Genre from '../Genre';
import { GenreListContainer } from './styles';

interface GenreListProps {
  dataSource: IGenre[];
  horizontal?: boolean;
}

export function GenreList({ dataSource, horizontal }: GenreListProps) {
  return (
    <GenreListContainer>
        {dataSource.length && dataSource?.map((item: IGenre, index) => (
          <Genre key={index} text={item} />
        ))}
      </GenreListContainer>
  );
}

export default GenreList;
