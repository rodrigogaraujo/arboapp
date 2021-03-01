import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, Text} from './styles';
import {colors} from '../../styles';

export default function Loading() {
  return (
    <Container>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text>Carregando...</Text>
    </Container>
  );
}
