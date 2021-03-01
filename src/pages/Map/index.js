import React, {useState, useCallback} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Checkbox} from 'react-native-paper';

import {
  Container,
  HomeButton,
  ViewDetailMapper,
  TitleContainer,
  ImageUser,
  Title,
  ViewMap,
  LabelViewMap,
  ViewImage,
  LabelViewImage,
  Content,
  Row,
  TextCheck,
  SubTitle,
  SubTitleTwo,
  TitleCenter,
  WinText,
  RowWin,
  ButtonView,
} from './styles';

import Loading from '../../components/Loading';
import Menu from '../../components/Menu';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {colors} from '../../styles';
import Picker from '../../components/Picker';
import months from '../../utils/months';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória'),
});

const Map = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [yes, setYes] = useState(true);
  const [no, setNo] = useState(false);
  const [month, setMonth] = useState('');
  const [monthTo, setMonthTo] = useState('');

  const handleSignIn = useCallback(async (data) => {}, []);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <HomeButton>
        <Menu show={true} active="map" navigation={navigation} />
      </HomeButton>
      <ScrollView>
        <ViewDetailMapper>
          <ImageUser />
          <TitleContainer>MAPEAR ÁRVORE</TitleContainer>
        </ViewDetailMapper>
        <Content>
          <Title>LOCAL *</Title>
        </Content>
        <ViewMap />
        <LabelViewMap>A ÁRVORE SERÁ MAPEADA NO SEU LOCAL ATUAL</LabelViewMap>
        <Content>
          <Title>IMAGEM *</Title>
        </Content>
        <ViewImage>
          <Icon name="image" size={40} color={colors.primary} />
          <LabelViewImage>Adicionar imagem</LabelViewImage>
        </ViewImage>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={schema}
          onSubmit={handleSignIn}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <Content>
              <Title>NOME DA ÁRVORE *</Title>
              <Input
                name="name"
                placeholder="Laranjeira, macieira, bananeira..."
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
              />
              <Title>DESCRIÇÃO DO LOCAL *</Title>
              <Input
                name="info"
                placeholder="Próximo ao estádio..."
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
              />
              <Title>ÁRVORE JÁ PRODUZ? *</Title>
              <Row>
                <Checkbox
                  color={colors.primary}
                  status={yes ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setYes(!yes);
                    setNo(yes ? true : false);
                  }}
                />
                <TextCheck>Sim</TextCheck>
                <Checkbox
                  color={colors.primary}
                  status={no ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setNo(!no);
                    setYes(no ? true : false);
                  }}
                />
                <TextCheck>Não</TextCheck>
              </Row>
              <Title>INFORMAÇÕES ADICIONAIS</Title>
              <SubTitle>Meses da produção de frutos</SubTitle>
              <Picker
                data={months}
                icon="list"
                setValue={setMonth}
                value={month}
              />
              <SubTitleTwo>Até</SubTitleTwo>
              <Picker
                data={months}
                icon="list"
                setValue={setMonthTo}
                value={monthTo}
              />
              <TitleCenter>MAPEANDO ESSA ÁRVORE, VOCÊ GANHA</TitleCenter>
              <RowWin>
                <WinText>+30</WinText>
                <WinText>+100 XP</WinText>
              </RowWin>
              <ButtonView>
                <Button>Concluir</Button>
              </ButtonView>
            </Content>
          )}
        </Formik>
      </ScrollView>
    </Container>
  );
};

export default Map;
