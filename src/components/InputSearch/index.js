import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

import {colors} from '../../styles';
import {Container, TextInput, Icon, ErrorText} from './styles';

const InputSearch = ({icon, password, error, mask = null, ...rest}) => {
  const [passwordView, setPasswordView] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    setPasswordView(password);
  }, [password]);

  return (
    <Container password={password} isFocused={isFocused} error={error}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={isFocused ? colors.osloGray : colors.grey}
        />
      )}
      {!mask ? (
        <TextInput
          {...rest}
          secureTextEntry={passwordView}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholderTextColor={colors.osloGray}
        />
      ) : (
        <TextInputMask
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          mask={mask}
          placeholderTextColor={colors.osloGray}
        />
      )}

      {error && <ErrorText>{error}</ErrorText>}

      {password && (
        <TouchableOpacity onPress={() => setPasswordView(!passwordView)}>
          <Icon
            passwordView={passwordView}
            name="eye"
            size={20}
            color={passwordView ? '#595959' : '#0060B0'}
          />
        </TouchableOpacity>
      )}
    </Container>
  );
};

InputSearch.propTypes = {
  icon: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default InputSearch;
