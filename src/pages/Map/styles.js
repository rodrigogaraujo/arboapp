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
  padding: 180px 50px 50px 50px;
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

export const TitleCenter = styled.Text`
  font-family: ${fonts.fontFamilyStrongBold};
  font-size: ${fonts.regular};
  color: ${colors.primary};
  width: 100%;
  text-align: center;
  margin-top: 24px;
`;

export const ViewMap = styled.View`
  width: ${width - 60}px;
  height: 150px;
  background: red;
  margin: 0 30px;
  margin-top: 12px;
`;

export const LabelViewMap = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.small};
  color: ${colors.primary};
  margin-top: 8px;
  padding: 0 30px;
`;

export const ViewImage = styled.View`
  width: ${width - 60}px;
  height: 150px;
  background: ${colors.grey};
  margin: 0 30px;
  margin-top: 12px;
  align-items: center;
  justify-content: center;
`;

export const LabelViewImage = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.small};
  color: ${colors.primary};
  margin-top: 8px;
`;

export const Content = styled.View`
  width: ${width - 60}px;
  margin: 0 30px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextCheck = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.regular};
  color: ${colors.primary};
  margin-right: 8px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.regular};
  color: ${colors.black};
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const SubTitleTwo = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.regular};
  color: ${colors.black};
  width: 100%;
  text-align: center;
  margin-bottom: 8px;
`;

export const WinText = styled.Text`
  font-family: ${fonts.fontFamilyLight};
  font-size: ${fonts.regular};
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 8px;
  margin-left: 24px;
`;

export const RowWin = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonView = styled.View`
  margin-bottom: 40px;
`;
