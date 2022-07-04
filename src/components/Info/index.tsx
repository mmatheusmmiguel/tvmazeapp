import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import constants from '../../constants';
import {
  InfoContainer,
  InfoDescriptionText,
  InfoIconContainer,
  NameInfoText,
} from './styles';

interface InfoItemProps {
  name: string;
  icon?: string;
  iconSize?: number;
  iconColor?: string;
  nameFontSize?: number;
  nameFontColor?: string;
  description: string | number;
  descriptionFontSize?: number;
  descriptionFontColor?: string;
}

export function Info({
  name,
  description,
  icon,
  iconSize,
  iconColor,
  nameFontSize,
  nameFontColor,
  descriptionFontSize,
  descriptionFontColor,
}: InfoItemProps) {
  return (
    <InfoContainer>
      <NameInfoText fontSize={nameFontSize} fontColor={nameFontColor}>
        {name}:
      </NameInfoText>

      <InfoIconContainer>
        {icon && (
          <Icon
            name={icon}
            size={iconSize ? iconSize : 15}
            color={iconColor ? iconColor : constants.COLORS.WHITE}
          />
        )}
        <InfoDescriptionText
          fontSize={descriptionFontSize}
          fontColor={descriptionFontColor}>
          {description}
        </InfoDescriptionText>
      </InfoIconContainer>
    </InfoContainer>
  );
}

export default Info;
