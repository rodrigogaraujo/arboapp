import React, {useCallback, useState, useEffect} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Logo,
  TextError,
  Content,
  ViewLogo,
  CloseButton,
} from './styles';

import {colors} from '../../styles';
import {useAuth} from '../../hooks/Auth';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória'),
});

const SignInWithEmail = () => {
  const navigation = useNavigation();
  const {signIn} = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(
    async (data) => {
      setLoading(true);
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    },
    [signIn],
  );

  useEffect(() => {
    Geolocation.getCurrentPosition(() => {});
  }, []);

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
                <Icon name="x" color={colors.primary} size={28} />
              </CloseButton>
            </ViewLogo>
            <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={schema}
              onSubmit={handleSignIn}>
              {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <Content>
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

                  {error !== null && <TextError>{error}</TextError>}
                  <Button onPress={handleSubmit}>ENTRAR</Button>
                </Content>
              )}
            </Formik>
          </ScrollView>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignInWithEmail;
