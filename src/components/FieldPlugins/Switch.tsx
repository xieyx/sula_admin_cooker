import React from 'react';
import { Switch as ASwitch } from 'antd';

const isTrue = (value: any) => {
  if (value === '0' || value === '' || value === null) {
    return false;
  }
  return !!value;
};

const Switch: React.FC<Record<string, any>> = ({ onChange, checked, ...props }) => {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
  };
  return <ASwitch onChange={handleChange} checked={isTrue(checked)} {...props} />;
};

export default Switch;
