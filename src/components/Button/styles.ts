import styled from 'styled-components/native';
import constants from '../../constants';

export const ButtonContainer = styled.TouchableOpacity`
    padding: 14px;
    justify-content: center;
    flex-direction: row;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : constants.COLORS.RED}
    margin: 10px;
    border-radius: 5px;
    align-items: center;
`

export const ButtonTextBold = styled.Text`
    margin: 2px;
    font-size: ${props => props.fontSize ? props.fontSize + "px" : "18px"};
    font-weight: bold;
    color: ${props => props.fontColor ? props.fontColor : constants.COLORS.WHITE};
`