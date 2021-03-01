import React, {useState, useCallback, useEffect} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ProgressBar} from 'react-native-paper';
import database from '@react-native-firebase/database';

import {
  Container,
  HomeButton,
  ViewDetailUser,
  NameUser,
  RankingCityText,
  LevelText,
  ImageUser,
  Title,
  ProgressView,
  ProgressBarTexts,
  XpText,
  MascotView,
  MascotContainer,
  MascotImage,
  TasksView,
  Task,
  Row,
  TitleTask,
  PriceTask,
  Wins,
  WinsTitle,
  WinsDescription,
  AmountEstatistic,
  StatisticView,
} from './styles';

import {useAuth} from '../../hooks/Auth';
import Loading from '../../components/Loading';
import Menu from '../../components/Menu';
import {colors} from '../../styles';

const Profile = () => {
  const {signOut, user} = useAuth();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [userData, setUserData] = useState();

  const handleSignOut = useCallback(async () => {
    await signOut();
  }, [signOut]);

  useEffect(() => {
    setLoading(true);
    database()
      .ref(`users/${user.uid}`)
      .once('value')
      .then((snapshot) => {
        if (snapshot) {
          setUserData(snapshot.val());
          console.log(user.uid);
        }
        setLoading(false);
      });
    setLoading(false);
  }, [user]);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <HomeButton>
        <Menu show={true} active="profile" navigation={navigation} />
      </HomeButton>
      <ScrollView>
        <ViewDetailUser>
          <ImageUser />
          <NameUser>
            {userData && userData.name ? userData.name.toUpperCase() : ''}
          </NameUser>
          <RankingCityText>#13 MELHOR DA CIDADE</RankingCityText>
          <LevelText>
            Nível {userData && userData.level ? userData.level : 0}
          </LevelText>
          <TouchableOpacity onPress={handleSignOut}>
            <LevelText>Sair</LevelText>
          </TouchableOpacity>
        </ViewDetailUser>
        <Title>Progresso</Title>
        <ProgressView>
          <XpText marginLeft={0.5 * 100}>
            {userData && userData.xp ? userData.xp : 0} XP
          </XpText>
          <ProgressBar
            progress={0.0}
            color={colors.primary}
            style={{height: 18, borderRadius: 10}}
          />
          <ProgressBarTexts>
            <XpText>0 XP</XpText>
            <XpText>3400 XP</XpText>
          </ProgressBarTexts>
        </ProgressView>
        <Title>Meu mascote</Title>
        <MascotView>
          <MascotContainer>
            <MascotImage />
          </MascotContainer>
          <TasksView>
            <Task>
              <Row>
                <TitleTask>SOLAR</TitleTask>
              </Row>
              <Row>
                <PriceTask>- 10</PriceTask>
              </Row>
            </Task>
            <Task>
              <Row>
                <TitleTask>SOLAR</TitleTask>
              </Row>
              <Row>
                <PriceTask>- 10</PriceTask>
              </Row>
            </Task>
            <Task>
              <Row>
                <TitleTask>SOLAR</TitleTask>
              </Row>
              <Row>
                <PriceTask>- 10</PriceTask>
              </Row>
            </Task>
            <Task>
              <Row>
                <TitleTask>SOLAR</TitleTask>
              </Row>
              <Row>
                <PriceTask>- 10</PriceTask>
              </Row>
            </Task>
          </TasksView>
        </MascotView>
        <Title>Prêmios</Title>
        <Row>
          <Wins>
            <WinsTitle gold>Framboesa de ouro</WinsTitle>
            <WinsDescription>Mapeou mais de 36 árvores</WinsDescription>
          </Wins>
        </Row>
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

export default Profile;
