import styled from 'styled-components/native';

export const AvatarScrollView = styled.ScrollView`
  margin-bottom: 20px;
  flex-direction: ${props => (props.isHorizontal ? 'row' : 'column')};
`;
