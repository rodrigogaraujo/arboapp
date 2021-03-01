import styled from 'styled-components';

import {colors, fonts} from '../../../styles';

const ImageStyle = styled.Image``;

export const Container = styled.View`
  width: 220px;
  margin-top: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageView = styled(ImageStyle).attrs({
  source: require('../../../assets/cr7.jpg'),
})`
  width: 180px;
  height: 180px;
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: ${fonts.small};
  color: ${colors.black};
  margin-top: 8px;
`;
