import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import {colors, fonts} from '../../styles';

export const Container = styled(RectButton)`
  width: ${({width}) => (width ? width : '100')}%;
  height: 60px;
  background-color: ${({backgroundColor}) =>
    backgroundColor ? backgroundColor : colors.primary};
  border-radius: 15px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.fontFamilyBold};
  font-size: 21px;
  color: ${({color}) => (color ? color : colors.white)};
`;
