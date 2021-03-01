import styled from 'styled-components/native';

import {colors, fonts} from '../../styles';

const ImageStyle = styled.Image``;

export const Container = styled.View`
  flex: 1;
  padding: 40px;
  background-color: ${colors.white};
  border-radius: 24px;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
`;

export const CloseButton = styled.TouchableOpacity``;

export const StarButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-family: ${fonts.fontFamilyStrongBold};
  font-size: ${fonts.regular};
  color: ${colors.primary};
  margin-top: 24px;
  margin-right: 30px;
`;

export const TitleSmall = styled.Text`
  font-family: ${fonts.fontFamilyStrongBold};
  font-size: ${fonts.small};
  color: ${colors.primary};
  margin-top: 24px;
  margin-right: 30px;
`;

export const ImageTree = styled(ImageStyle).attrs({
  source: require('../../assets/pomar.jpg'),
  resizeMode: 'cover',
})`
  width: 100%;
  height: 200px;
  margin-bottom: 12px;
  margin-top: 12px;
  border-radius: 8px;
  position: relative;
`;

export const ImageUser = styled(ImageStyle).attrs({
  source: require('../../assets/cr7.jpg'),
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const ViewDetailUser = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  padding-bottom: 24px;
  border-bottom-color: ${colors.osloGray};
`;

export const ViewTextUser = styled.TouchableOpacity`
  flex-direction: column;
  margin-left: 8px;
`;

export const NameUser = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.osloGray};
`;

export const LevelUser = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.osloGray};
`;

export const ButtonUserLike = styled.TouchableOpacity`
  margin-left: auto;
  background-color: ${colors.osloGray};
  flex-direction: row;
  padding: 10px;
  align-items: center;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.black};
  margin-left: 4px;
`;

export const Description = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  text-align: justify;
  color: ${colors.osloGray};
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 24px;
  align-items: center;
`;

export const ViewMonths = styled.View`
  flex-direction: row;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
`;

export const ViewAddress = styled.View`
  margin-left: 8px;
`;

export const AdressText = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.regular};
  color: ${colors.primary};
`;

export const CityText = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.primary};
`;

export const MonthText = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.primary};
  border-width: 2px;
  border-color: ${colors.primary};
  padding: 10px 20px;
  border-radius: 10px;
`;

export const ViewSpace = styled.View`
  height: 2px;
  width: 24px;
  border-width: 2px;
  border-color: ${colors.primary};
  margin: 0 12px;
`;
