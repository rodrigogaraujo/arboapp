import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {colors, fonts} from '../../styles';

const windowWidth = Dimensions.get('window').width;

const ImageStyle = styled.Image``;

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const Content = styled.View`
  width: ${windowWidth - 60}px;
  margin: 12px 30px 0 30px;
`;

export const HomeButton = styled.View`
  position: absolute;
  width: 100%;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ImageUser = styled(ImageStyle).attrs({
  source: require('../../assets/tree.png'),
})`
  width: 180px;
  height: 180px;
  border-radius: 50px;
`;

export const ViewDetailMapper = styled.View`
  background: ${colors.primary};
  padding: 110px 50px 20px 50px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.Text`
  font-family: ${fonts.fontFamilyStrongBold};
  font-size: ${fonts.bigger};
  color: ${colors.white};
  margin-top: 24px;
`;

export const FlatListStyled = styled.FlatList`
  flex-basis: 0;
  margin-top: 12px;
`;
