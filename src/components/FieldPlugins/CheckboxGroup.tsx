import React from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup: React.FC<{
  [propName: string]: any;
}> = ({ onChange, ...props }) => {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
  };
  return <Checkbox.Group onChange={handleChange} {...props} />;
};

export default CheckboxGroup;
