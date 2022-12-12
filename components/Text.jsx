import React from 'react';
import { Text as NativeText } from 'react-native';
import cx from 'classnames';

const Text = ({ children, _className, fontWeight, color }) => {
  const classStr = cx(_className);

  let fontFamily;

  switch (fontWeight) {
    case 'medium':
      fontFamily = 'Poppins-medium';
      break;
    case 'bold':
      fontFamily = 'Poppins-bold';
      break;
    default:
      fontFamily = 'Poppins-regular';
      break;
  }
  return (
    <NativeText
      style={{ fontFamily, color: color ? color : '#FFF' }}
      className={classStr}
    >
      {children}
    </NativeText>
  );
};

export default Text;
