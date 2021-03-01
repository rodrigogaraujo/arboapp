import React, {useState, useCallback} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  HomeButton,
  ViewDetailMapper,
  TitleContainer,
  Title,
  Content,
  Row,
  TextBigger,
  TextSmall,
  ViewBottom,
} from './styles';

import Loading from '../../components/Loading';
import Menu from '../../components/Menu';
import Button from '../../components/Button';

const Donate = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <HomeButton>
        <Menu show={true} active="donate" navigation={navigation} />
      </HomeButton>
      <ScrollView>
        <ViewDetailMapper>
          <TitleContainer>POR QUE DOAR?</TitleContainer>
        </ViewDetailMapper>
        <Content>
          <Title>JÁ FIZEMOS</Title>
          <Row>
            <TextBigger>16.321</TextBigger>
            <TextSmall>ÁRVORES PLANTADAS</TextSmall>
          </Row>
          <Row>
            <TextBigger>16.321</TextBigger>
            <TextSmall>ÁRVORES PLANTADAS</TextSmall>
          </Row>
          <Row>
            <TextBigger>16.321</TextBigger>
            <TextSmall>ÁRVORES PLANTADAS</TextSmall>
          </Row>
          <Row>
            <TextBigger>16.321</TextBigger>
            <TextSmall>ÁRVORES PLANTADAS</TextSmall>
          </Row>
          <Title>TUDO ISSO COM APENAS</Title>
          <Row>
            <TextBigger>16.321</TextBigger>
            <TextSmall>REAIS ARRECADADOS</TextSmall>
          </Row>
          <ViewBottom>
            <Button>APOIE ESTA CAUSA</Button>
          </ViewBottom>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Donate;
