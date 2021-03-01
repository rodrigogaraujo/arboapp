import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.primary};
`;
