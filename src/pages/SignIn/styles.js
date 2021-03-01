import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

import {fonts, colors} from '../../styles';

const ImageStyle = styled.Image``;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  max-width: 100%;
`;

export const Logo = styled(ImageStyle).attrs({
  source: require('../../assets/logo.png'),
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100px;
  margin-bottom: 100px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: ${colors.white};
  min-width: 250px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 28px;
`;

export const LoginButtonText = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.bigger};
  color: ${colors.primary};
`;

export const TextWithPaddingTop = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  margin-top: 24px;
`;

export const ViewSocialLogins = styled.View`
  flex-direction: row;
  margin-top: 24px;
  width: 50%;
  justify-content: space-around;
`;

export const ViewSocialLoginsButton = styled.TouchableOpacity`
  background-color: ${colors.white};
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const TextError = styled.Text`
  font-size: 12px;
  color: #cb2525;
  font-family: ${fonts.fontFamilyRegular};
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${colors.white};
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
`;

export const CreateAccountButton = styled.TouchableOpacity`
  padding: 16px 0 ${16 + getBottomSpace()}px;
`;

export const CreateAccountButtonText = styled.Text`
  color: #f6f9fd;
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  margin-left: 16px;
`;
