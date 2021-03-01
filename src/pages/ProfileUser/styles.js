import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

import {colors, fonts} from '../../styles';

const ImageStyle = styled.Image``;

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const HomeButton = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  top: 25px;
  border-radius: 25px;
  left: 25px;
  z-index: 1000;
`;

export const ImageUser = styled(ImageStyle).attrs({
  source: require('../../assets/cr7.jpg'),
})`
  width: 180px;
  height: 180px;
  border-radius: 50px;
`;

export const ViewDetailUser = styled.View`
  background: ${colors.primary};
  padding: 60px 50px 50px 50px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  justify-content: center;
  align-items: center;
`;

export const NameUser = styled.Text`
  font-family: ${fonts.fontFamilyStrongBold};
  font-size: ${fonts.bigger};
  color: ${colors.white};
  margin-top: 24px;
`;

export const RankingCityText = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.regular};
  color: ${colors.white};
`;

export const LevelText = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.regular};
  color: ${colors.white};
`;

export const Title = styled.Text`
  font-family: ${fonts.fontFamilyStrongBold};
  font-size: ${fonts.bigger};
  color: ${colors.primary};
  margin-top: 24px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const Description = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  text-align: justify;
  color: ${colors.osloGray};
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const RowCity = styled.View`
  flex-direction: row;
  margin-top: 12px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const SubtitleDescription = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.primary};
`;

export const TextDescription = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.black};
  margin-left: 12px;
`;

export const Mascot = styled.View`
  margin-top: 12px;
  margin-right: 12px;
`;

export const MascotImage = styled(ImageStyle).attrs({
  source: require('../../assets/cr7.jpg'),
})`
  width: 150px;
  height: 180px;
  border-radius: 12px;
`;

export const MascotName = styled.Text`
  font-family: ${fonts.fontFamilyBold};
  font-size: ${fonts.regular};
  color: ${colors.primary};
  text-align: center;
  margin-top: 8px;
`;

export const Wins = styled.View`
  padding: 0 30px;
  margin-top: 12px;
`;

export const WinsTitle = styled.Text`
  font-family: ${fonts.fontFamilyBold};
  font-size: ${fonts.regular};
  color: ${({gold}) => (gold ? colors.gold : colors.osloGray)};
`;

export const WinsDescription = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.osloGray};
`;

export const StatisticView = styled.View`
  margin-left: 24px;
  padding-bottom: 30px;
`;

export const AmountEstatistic = styled.Text`
  font-family: ${fonts.fontFamilyStrongBold};
  font-size: ${fonts.extraBigger};
  color: ${colors.osloGray};
`;
