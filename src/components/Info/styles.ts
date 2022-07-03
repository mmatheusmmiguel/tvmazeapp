import styled from 'styled-components/native';
import constants from '../../constants';

export const InfoContainer = styled.View`
    flex-direction: column;
    align-items: center;
`

export const NameInfoText = styled.Text`
    font-size: ${props => props.fontSize ? props.fontSize + "px" : "16px"}
    color: ${props => props.fontColor ? props.fontColor : constants.COLORS.GRAY}
    font-weight: 600;
`

export const InfoIconContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const InfoDescriptionText = styled.Text`
    font-size: ${props => props.fontSize ? props.fontSize + "px" : "18px"}
    color: ${props => props.fontColor ? props.fontColor : constants.COLORS.WHITE}
    font-weight: bold;
`