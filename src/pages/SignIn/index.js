import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {
  Container,
  Logo,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  LoginButton,
  LoginButtonText,
  TextWithPaddingTop,
  ViewSocialLogins,
  ViewSocialLoginsButton,
} from './styles';

import {colors} from '../../styles';

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Logo />
            <LoginButton onPress={() => navigation.navigate('SignInWithEmail')}>
              <LoginButtonText>LOGIN</LoginButtonText>
            </LoginButton>
            <TextWithPaddingTop>Ou</TextWithPaddingTop>

            <ViewSocialLogins>
              <ViewSocialLoginsButton>
                <Icon name="social-facebook" color={colors.primary} size={28} />
              </ViewSocialLoginsButton>
              <ViewSocialLoginsButton>
                <Icon name="social-google" color={colors.primary} size={28} />
              </ViewSocialLoginsButton>
            </ViewSocialLogins>

            <ForgotPassword>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
            <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
              <CreateAccountButtonText>
                Caso ainda não possua conta CADASTRE-SE
              </CreateAccountButtonText>
            </CreateAccountButton>
          </Container>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
