import styled from 'styled-components';
import {Dimensions} from 'react-native';

import {colors, fonts} from '../../../styles';

const {width} = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  width: ${width - 60}px;
  margin-top: 5px;
  margin: 0 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.osloGray};
`;

export const Title = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.bigger};
  color: ${colors.black};
  text-align: center;
  padding: 12px 0;
`;
