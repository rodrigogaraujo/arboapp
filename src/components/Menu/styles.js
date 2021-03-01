import styled from 'styled-components/native';

import {colors, fonts} from '../../styles';

const ImageStyle = styled.Image``;

export const Container = styled.View`
  width: 100%;
  background: white;
  padding: 12px 0;
  background-color: ${({menuShow}) =>
    menuShow ? colors.white : 'transparent'};
`;

export const HomeButtonView = styled.TouchableOpacity`
  padding: 12px;
  justify-content: center;
  align-items: center;
`;

export const HomeButton = styled.View`
  background: ${({active}) => (active ? colors.primary : colors.grey)};
  padding: 12px;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: ${({active}) =>
    active ? fonts.fontFamilyStrongBold : fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.primary};
`;

export const MenuView = styled.ScrollView`
  width: 100%;
`;
