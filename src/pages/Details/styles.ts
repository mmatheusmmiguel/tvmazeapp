import styled from 'styled-components/native';
import constants from '../../constants';

export const Container = styled.View`
  display: flex;
  flex: 1;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

export const TextDetails = styled.Text`
    font-size: 20px;
    margin: 10px;
    color: ${constants.COLORS.WHITE}
    align-self: flex-start;
    font-weight: bold;
`;

export const HeaderImage = styled.Image`
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
  align-self: stretch;
`;

export const ForegroundContainer = styled.View`
  flex: 1;
  display: flex;
  align-self: stretch;
  align-items: center;
`;
export const Divisor = styled.View`
    border-left-color: ${props =>
      props.color ? props.color : constants.COLORS.WHITE}
    border-left-width: 0.7px;
`;
export const Title = styled.Text`
    bottom: 10px;
    color: ${props => (props.color ? props.color : constants.COLORS.WHITE)}
    position: absolute;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    text-shadow: 2px 2px 5px ${constants.COLORS.BLACK};
`;
export const SeasonsContainer = styled.TouchableOpacity`
  padding: 10px 15px 10px 15px;
  margin: 10px;
  border-radius: 5px;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : constants.COLORS.BLACK};
`;
export const TextSeason = styled.Text`
    font-size: 24px;
    color: ${constants.COLORS.WHITE}
    font-weight: bold;
`;
export const ContainerCardEpisodeScrollView = styled.ScrollView`
  margin-top: 10px;
  padding: 10px;
`;
