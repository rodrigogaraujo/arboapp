import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  HomeButton,
  ViewDetailMapper,
  TitleContainer,
  Title,
  Content,
  FlatListStyled,
} from './styles';

import Loading from '../../components/Loading';
import Menu from '../../components/Menu';
import Item from './Item';

const Learning = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <HomeButton>
        <Menu show={true} active="learning" navigation={navigation} />
      </HomeButton>
      <ScrollView>
        <ViewDetailMapper>
          <TitleContainer>PARA APRENDER</TitleContainer>
        </ViewDetailMapper>
        <Content>
          <Title>PARA ASSISTIR</Title>
          <FlatListStyled
            horizontal
            data={[{id: 123123}, {id: 1231234}, {id: 1231236}]}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
          <Title style={{marginTop: 32}}>PARA LER</Title>
          <FlatListStyled
            horizontal
            data={[{id: 123123}, {id: 1231234}, {id: 1231236}]}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Learning;
