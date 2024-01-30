import { View } from 'react-native';
import React from 'react';
import styles from './Card.style';
import type { ICardProps } from './Card.type';

const Card = (props: ICardProps) => {
  const { style, ...rest } = props;

  return <View {...{ style: [styles.container, style], ...rest }} />;
};

export default Card;
