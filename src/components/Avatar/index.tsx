import React from 'react';
import {
  AvatarContainer,
  AvatarDescriptionText,
  AvatarIcon,
  AvatarNameText,
} from './styles';
// import { Container } from './styles';

interface AvatarProps {
  url?: string;
  name: string;
  description: string;
  size?: number;
  nameTextColor?: string;
  nameFontSize?: number;
  descriptionTextColor?: string;
  descriptionTextSize?: string;
}

export function Avatar({
  url,
  name,
  description,
  size,
  nameFontColor,
  nameFontSize,
  descriptionFontColor,
  descriptionFontSize,
}: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarIcon source={{uri: url}} size={size} />
      <AvatarNameText
        testID={'avatar_name'}
        fontColor={nameFontColor}
        fontSize={nameFontSize}>
        {name}
      </AvatarNameText>
      <AvatarDescriptionText
        fontColor={descriptionFontColor}
        fontSize={descriptionFontSize}>
        {description}
      </AvatarDescriptionText>
    </AvatarContainer>
  );
}

export default Avatar;
