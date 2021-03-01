import styled from 'styled-components/native';

import {fonts, colors} from '../../styles';

const ImageStyle = styled.Image``;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  background-color: ${colors.white};
`;

export const ViewLogo = styled.View`
  position: relative;
  background-color: ${colors.white};
  width: 100%;
`;

export const Logo = styled(ImageStyle).attrs({
  source: require('../../assets/logo.png'),
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100px;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: white;
  padding: 14px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`;

export const Content = styled.View`
  background-color: ${colors.white};
  margin-top: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 30px 40px 30px;
`;

export const CheckedTerms = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const CheckedTermsText = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
`;

export const TextError = styled.Text`
  font-size: 12px;
  color: #cb2525;
  font-family: ${fonts.fontFamilyRegular};
`;
