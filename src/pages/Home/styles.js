import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

import {colors, fonts} from '../../styles';

const ImageStyle = styled.Image``;

const ImageStyleTwo = styled.Image``;

export const Container = styled.View`
  flex: 1;
`;

export const HomeButton = styled.View`
  position: absolute;
  width: 100%;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const ShowDetailsTree = styled.View`
  background: ${colors.white};
  position: absolute;
  bottom: 0;
  width: ${width - 48}px;
  margin: 0 24px;
  padding: 24px;
  border-radius: 8px;
  height: ${(props) => (props.show ? '250px' : '0')};
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

export const HeaderDetailsTree = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CityText = styled.Text`
  font-family: ${fonts.fontFamilyBold};
  font-size: ${fonts.small};
  color: ${colors.primary};
  align-self: flex-end;
  margin-left: 8px;
`;

export const ContentDetailsTree = styled.View``;

export const ImageTree = styled(ImageStyle).attrs({
  source: require('../../assets/pomar.jpg'),
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100px;
  margin-bottom: 12px;
  margin-top: 12px;
  border-radius: 8px;
  position: relative;
`;

export const BackgroundImage = styled.View`
  position: absolute;
  bottom: 10%;
  background: ${colors.black};
  opacity: 0.6;
  height: 40px;
  border-radius: 8px;
  width: 100%;
  padding: 15px;
`;

export const TitleTree = styled.Text`
  position: absolute;
  bottom: 5%;
  color: ${colors.white};
  font-family: ${fonts.fontFamilyBold};
  font-size: ${fonts.regular};
  padding: 15px;
`;

export const FooterDetailsTree = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageUser = styled(ImageStyleTwo).attrs({
  source: require('../../assets/cr7.jpg'),
  resizeMode: 'contain',
})`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const NameUser = styled.Text`
  color: ${colors.grey};
  font-family: grey;
  font-size: ${fonts.small};
  margin-left: 8px;
`;

export const ButtonSeeMore = styled.TouchableOpacity`
  margin-left: auto;
`;

export const ButtonSeeMoreText = styled.Text`
  color: ${colors.primary};
  font-family: ${fonts.fontFamilyBold};
  font-size: ${fonts.small};
`;
