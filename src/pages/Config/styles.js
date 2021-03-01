import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

import {colors, fonts} from '../../styles';

const ImageStyle = styled.Image``;

export const Container = styled.View`
  flex: 1;
  position: relative;
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

export const Title = styled.Text`
  font-family: ${fonts.fontFamilyStrongBold};
  font-size: ${fonts.regular};
  color: ${colors.primary};
  margin-top: 24px;
  margin-right: 30px;
`;

export const LabelViewMap = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.small};
  color: ${colors.primary};
  margin-top: 8px;
  padding: 0 30px;
`;

export const Content = styled.View`
  width: ${width - 60}px;
  margin: 0 30px;
  padding-bottom: 30px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextBigger = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.primary};
`;

export const TextSmall = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.regular};
  color: ${colors.osloGray};
  margin-left: 4px;
  flex-wrap: wrap;
`;

export const ViewConfig = styled.View`
  margin-top: 24px;
  padding-top: 24px;
  padding-bottom: 40px;
  background-color: ${colors.osloGray};
  width: 100%;
  height: 300px;
`;
