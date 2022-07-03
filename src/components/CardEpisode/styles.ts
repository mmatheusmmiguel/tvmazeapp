import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const CardEpisodeContainer: TouchableOpacity = styled.TouchableOpacity`
  margin-right: 20px;
  flex-direction: column;
  align-items: flex-start;
`;
export const CardImageBackground = styled.ImageBackground`
  height: 110px;
  width: 200px;
`;
export const ImageOverlayView = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: ${props => (props.opacity ? props.opacity : '0.3')};
`;
export const DurationTextContainer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
`;
export const DurationText = styled.Text`
  text-shadow: 2px 2px 5px #000;
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;
export const EpisodeNumberText = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: #ccc;
`;
export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  width: 200px;
`;
