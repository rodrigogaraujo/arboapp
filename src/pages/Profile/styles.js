import styled, {css} from 'styled-components/native';
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
  source: require('../../assets/cr7.jpg'),
})`
  width: 180px;
  height: 180px;
  border-radius: 50px;
`;

export const ViewDetailUser = styled.View`
  background: ${colors.primary};
  padding: 180px 50px 50px 50px;
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

export const ProgressView = styled.View`
  margin-top: 12px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const ProgressBarTexts = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const XpText = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.regular};
  color: ${colors.black};
  margin-bottom: 8px;
  ${({marginLeft}) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft - 10}%;
    `}
`;

export const MascotView = styled.View`
  flex-direction: row;
  padding: 0 30px;
  margin-top: 24px;
`;

export const MascotContainer = styled.View`
  flex-basis: 50%;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
`;

export const MascotImage = styled(ImageStyle).attrs({
  source: require('../../assets/plant.png'),
})`
  width: 80px;
  height: 80px;
  margin-top: auto;
`;

export const TasksView = styled.View`
  flex-basis: 50%;
  align-items: center;
  justify-content: center;
`;

export const Task = styled.View`
  padding: 12px;
  background-color: ${colors.primaryLight};
  margin-top: 12px;
  align-self: flex-end;
  min-width: 130px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const TitleTask = styled.Text`
  font-family: ${fonts.fontFamilyBold};
  font-size: ${fonts.regular};
  color: ${colors.white};
`;

export const PriceTask = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.regular};
  color: ${colors.white};
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
