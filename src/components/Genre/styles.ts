import styled from 'styled-components/native';
import constants from '../../constants';

export const GenreContainer = styled.View`
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : constants.COLORS.RED};
`;

export const GenreText = styled.Text`
font-size: ${props => (props.fontSize ? props.fontSize : '16px')}
font-weight: bold;
color: ${props => (props.fontColor ? props.fontColor : '#fff')}
`;
