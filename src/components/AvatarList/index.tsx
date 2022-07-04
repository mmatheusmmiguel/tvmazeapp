import React from 'react';
import {IGetCast} from '../../services/Cast';
import Avatar from '../Avatar';
import {AvatarScrollView} from './styles';

interface AvatarListProps {
  horizontal?: boolean;
  dataSource: IGetCast[];
}

export function AvatarList({horizontal, dataSource}: AvatarListProps) {
  return (
    <AvatarScrollView horizontal={horizontal} isHorizontal={horizontal}>
      {dataSource?.length &&
        dataSource.map((item: IGetCast, index) => (
          <Avatar
            key={index}
            url={item.person.image?.original}
            name={item.person?.name}
            description={item.character?.name}
          />
        ))}
    </AvatarScrollView>
  );
}

export default AvatarList;
