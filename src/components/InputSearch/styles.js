import styled, {css} from 'styled-components/native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import {colors, fonts} from '../../styles';

export const Container = styled.View`
  width: 100%;
  height: 55px;
  padding: 0 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.grey};
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.password &&
    css`
      padding-right: 5px;
    `};
  ${(props) =>
    props.isFocused &&
    css`
      border-bottom-color: ${colors.osloGray};
    `};
  ${(props) =>
    props.error &&
    css`
      border-bottom-color: ${colors.red};
    `};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: ${fonts.fontFamilyRegular};
  font-size: 16px;
  color: ${colors.osloGray};
  text-align: center;
`;

export const Icon = styled(SimpleLineIcon)`
  margin-right: 16px;
`;

export const ErrorText = styled.Text`
  font-family: ${fonts.fontFamilyRegular};
  font-size: 12px;
  color: ${colors.error};
  text-align: center;
`;
