import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {CardTitle, CardView} from './styles';

interface CardProps {
  text: string;
  title?: string;
}

export function Card({text, title}: CardProps) {
  const {width} = useWindowDimensions();

  const source = {
    html: text,
  };

  return (
    <CardView>
      <CardTitle>{title}</CardTitle>
      <RenderHtml
        tagsStyles={{
          p: {
            color: '#FFF',
          },
        }}
        contentWidth={width}
        source={source}
      />
    </CardView>
  );
}

export default Card;
