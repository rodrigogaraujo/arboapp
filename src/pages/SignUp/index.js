import React, {useCallback, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Checkbox} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import axios from 'axios';
import {
  Container,
  Logo,
  TextError,
  Content,
  ViewLogo,
  CloseButton,
  CheckedTerms,
  CheckedTermsText,
} from './styles';

import {colors} from '../../styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória'),
});

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingCep, setLoadingCep] = useState(false);
  const navigation = useNavigation();
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');

  const handleCep = useCallback(async (data) => {
    setCep(data);
    if (data) {
      if (data.length === 9) {
        const cep = data.replace('-', '');
        setLoadingCep(true);
        const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setCity(resp.data.localidade);
        setState(resp.data.uf);
        setLoadingCep(false);
      }
    }
  }, []);

  const handleSignIn = useCallback(
    async (data) => {
      if (checked) {
        setLoading(true);
        auth()
          .createUserWithEmailAndPassword(data.email, data.password)
          .then(function (user) {
            database()
              .ref(`users/${user.user.uid}`)
              .set({
                name: data.name,
                email: data.email,
                phone: data.phone,
                id: user.user.uid,
                cep: data.phone,
                city: data.city || city,
                state: data.state || state,
                level: 0,
                progress: 0,
              });
            setLoading(false);
            Alert.alert('Cadastrado com sucesso');
            navigation.navigate('SignInWithEmail');
          })
          .catch(function (error) {
            if (error.code === 'auth/email-already-in-use') {
              Alert.alert('Email já cadastrado');
            }
            if (error.code === 'auth/invalid-email') {
              console.log('Email invalido!');
            }
            setLoading(false);
            return;
          });
      } else {
        Alert.alert('Aceite os termos');
      }
    },
    [checked, city, state, navigation],
  );

  return loading ? (
    <Loading />
  ) : (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <Container>
          <ScrollView style={{flex: 1, width: '100%'}}>
            <ViewLogo>
              <Logo />
              <CloseButton onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" color={colors.primary} size={28} />
              </CloseButton>
            </ViewLogo>
            <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={schema}
              onSubmit={handleSignIn}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                setFieldValue,
              }) => (
                <Content>
                  <Input
                    name="name"
                    icon="user"
                    placeholder="Digite seu nome"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    error={errors.name}
                  />
                  <Input
                    name="email"
                    icon="envelope"
                    placeholder="Digite seu email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={errors.email}
                  />
                  <Input
                    name="password"
                    icon="lock"
                    placeholder="Digite sua senha"
                    password
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    returnKeyType="send"
                    onSubmitEditing={handleSubmit}
                    error={errors.password}
                  />
                  <Input
                    name="phone"
                    icon="phone"
                    placeholder="Digite seu telefone"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    error={errors.phone}
                    mask={'([00]) [00000]-[0000]'}
                  />
                  <Input
                    name="cep"
                    icon="location-pin"
                    placeholder="Digite seu CEP"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="numeric"
                    onChangeText={(e) => {
                      setFieldValue('cep', e);
                      handleCep(e);
                    }}
                    onBlur={handleBlur('cep')}
                    value={values.cep}
                    error={errors.cep}
                    mask={'[00000]-[000]'}
                  />
                  {loadingCep ? (
                    <ActivityIndicator size="large" color={colors.primary} />
                  ) : (
                    <>
                      <Input
                        name="city"
                        icon="location-pin"
                        placeholder="Sua cidade"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        value={values.city || city}
                        error={errors.city}
                      />
                      <Input
                        name="state"
                        icon="location-pin"
                        placeholder="Seu estado"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="numeric"
                        onChangeText={handleChange('state')}
                        onBlur={handleBlur('state')}
                        value={values.state || state}
                        error={errors.state}
                      />
                    </>
                  )}
                  <CheckedTerms>
                    <Checkbox
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                    <CheckedTermsText>
                      Eu concordo com as Políticas de uso do app Arbo
                    </CheckedTermsText>
                  </CheckedTerms>

                  {error !== null && <TextError>{error}</TextError>}
                  <Button onPress={handleSubmit}>CONCLUIR</Button>
                </Content>
              )}
            </Formik>
          </ScrollView>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
