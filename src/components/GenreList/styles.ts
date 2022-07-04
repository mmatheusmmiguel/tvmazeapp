import styled from 'styled-components/native';

export const GenreListContainer = styled.View`
  display: flex;
  flex-direction: ${props => (props.isHorizontal ? props.isHorizontal : 'row')};
  padding: 10px;
`;
