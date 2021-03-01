import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

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
  background-color: ${colors.black};
  width: 100%;
  border-bottom-left-radius: ${windowWidth / 2}px;
  border-bottom-right-radius: ${windowWidth / 2}px;
`;

export const Logo = styled(ImageStyle).attrs({
  source: require('../../assets/logo.png'),
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100px;
  margin-bottom: 150px;
  margin-top: 100px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  background-color: white;
  padding: 14px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  bottom: -28px;
  left: 42%;
  border-width: 1px;
  elevation: 5px;
  border-color: ${colors.grey};
`;

export const Content = styled.View`
  background-color: ${colors.white};
  margin-top: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 30px;
`;

export const TextError = styled.Text`
  font-size: 12px;
  color: #cb2525;
  font-family: ${fonts.fontFamilyRegular};
`;
