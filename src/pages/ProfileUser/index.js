import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconFontAwesome from 'react-native-vector-icons/SimpleLineIcons';

import {
  Container,
  HomeButton,
  ViewDetailUser,
  NameUser,
  RankingCityText,
  LevelText,
  ImageUser,
  Title,
  Description,
  Row,
  Wins,
  WinsTitle,
  WinsDescription,
  AmountEstatistic,
  StatisticView,
  SubtitleDescription,
  TextDescription,
  RowCity,
  Mascot,
  MascotImage,
  MascotName,
} from './styles';

import Loading from '../../components/Loading';

const ProfileUser = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <ScrollView>
        <HomeButton onPress={() => navigation.goBack()}>
          <IconFontAwesome name="arrow-left" size={30} color="white" />
        </HomeButton>
        <ViewDetailUser>
          <ImageUser />
          <NameUser>LUAN TORRES</NameUser>
          <RankingCityText>#13 MELHOR DA CIDADE</RankingCityText>
          <LevelText>Nível 14</LevelText>
        </ViewDetailUser>
        <Title>Biografia</Title>
        <Description>
          s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s
        </Description>
        <RowCity>
          <SubtitleDescription>Cidade:</SubtitleDescription>
          <TextDescription>Marcolandia</TextDescription>
        </RowCity>
        <RowCity>
          <SubtitleDescription>Menbro desde:</SubtitleDescription>
          <TextDescription>Janeiro, 2020</TextDescription>
        </RowCity>
        <RowCity>
          <SubtitleDescription>Fruta favorita:</SubtitleDescription>
          <TextDescription>Morango</TextDescription>
        </RowCity>
        <Title>Prêmios</Title>
        <Row>
          <Wins>
            <WinsTitle gold>Framboesa de ouro</WinsTitle>
            <WinsDescription>Mapeou mais de 36 árvores</WinsDescription>
          </Wins>
        </Row>
        <Title>Mascotes</Title>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginLeft: 30,
            marginRight: 30,
          }}>
          <Mascot>
            <MascotImage />
            <MascotName>Mascote 01</MascotName>
          </Mascot>
          <Mascot>
            <MascotImage />
            <MascotName>Mascote 01</MascotName>
          </Mascot>
          <Mascot>
            <MascotImage />
            <MascotName>Mascote 01</MascotName>
          </Mascot>
        </ScrollView>
        <Title>Estatísticas</Title>
        <StatisticView>
          <Row>
            <AmountEstatistic>13</AmountEstatistic>
            <Wins>
              <WinsTitle>Árvores plantadas</WinsTitle>
            </Wins>
          </Row>
        </StatisticView>
      </ScrollView>
    </Container>
  );
};

export default ProfileUser;
