import styled from 'styled-components/native';

export const AvatarContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarNameText = styled.Text`
    display: flex;
    color: ${props => (props.fontColor ? props.fontColor : '#fff')}
    font-size: ${props => (props.fontSize ? props.fontSize + 'px' : '15px')}
    font-weight: 500;
`;
export const AvatarDescriptionText = styled.Text`
    display: flex;
    color: ${props => (props.fontColor ? props.fontColor : '#ccc')}
    font-size: ${props => (props.fontSize ? props.fontSize + 'px' : '14px')}
    font-weight: 400;
`;
export const AvatarIcon = styled.Image`
    height: ${props => (props.imageSize ? props.imageSize + 'px' : '90px')}
    width: ${props => (props.imageSize ? props.imageSize + 'px' : '90px')}
    margin: 10px;
    border-radius: ${props =>
      props.imageSize ? props.imageSize / 2 + 'px' : '45px'}
`;
