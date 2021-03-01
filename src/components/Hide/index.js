import React from 'react';
import {View} from 'react-native';

const Hide = (props) => {
  const {children, hide} = props;
  if (hide) {
    return null;
  }
  return <View {...this.props}>{children}</View>;
};

export default Hide;
