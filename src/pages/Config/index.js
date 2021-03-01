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
  ViewConfig,
} from './styles';

import Loading from '../../components/Loading';
import Menu from '../../components/Menu';

const Config = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <HomeButton>
        <Menu show={true} active="settings" navigation={navigation} />
      </HomeButton>
      <ScrollView>
        <ViewDetailMapper>
          <TitleContainer>CONFIGURAÇÕES</TitleContainer>
        </ViewDetailMapper>
        <Content>
          <ViewConfig />
          <Title>CONTATO</Title>
          <Row>
            <TextBigger>E-mail</TextBigger>
            <TextSmall>arbo@casaong.org</TextSmall>
          </Row>
          <Row>
            <TextBigger>Instagram</TextBigger>
            <TextSmall>@projetoarbo_</TextSmall>
          </Row>
          <Row>
            <TextBigger>Telefone</TextBigger>
            <TextSmall>(00)00000-0000</TextSmall>
          </Row>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Config;
