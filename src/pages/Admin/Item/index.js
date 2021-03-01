import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Title} from './styles';

const Item = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('CardsCity')}>
      <Title>Caruaru</Title>
    </Container>
  );
};

export default Item;
