import React from 'react';
import {IGenre} from '../../types';
import Genre from '../Genre';
import {GenreListContainer} from './styles';

interface GenreListProps {
  dataSource: IGenre[];
}

export function GenreList({dataSource}: GenreListProps) {
  return (
    <GenreListContainer>
      {dataSource.length &&
        dataSource?.map((item: IGenre, index) => (
          <Genre key={index} text={String(item)} />
        ))}
    </GenreListContainer>
  );
}

export default GenreList;
