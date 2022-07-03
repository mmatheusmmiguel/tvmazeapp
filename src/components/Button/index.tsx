import React from 'react';
import {Text, View} from 'react-native';
import {ButtonContainer, ButtonTextBold} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  buttonFontSize?: number;
  buttonFontColor?: string;
  icon?: string;
  iconSize?: number;
  onPress: Function;
}

export function Button({
  text,
  backgroundColor,
  buttonFontSize,
  icon,
  iconSize,
  buttonFontColor,
  onPress,
}: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} backgroundColor={backgroundColor}>
      {icon && <Icon name={icon} color={buttonFontColor} size={iconSize ? iconSize : 32} />}
      <ButtonTextBold>{text}</ButtonTextBold>
    </ButtonContainer>
  );
}

export default Button;
