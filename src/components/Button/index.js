import React from 'react';
import PropTypes from 'prop-types';

import {Container, ButtonText} from './styles';

const Button = ({children, backgroundColor, width, color, ...rest}) => (
  <Container
    backgroundColor={backgroundColor}
    width={width}
    color={color}
    {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;
