import React from 'react';
import { Radio } from 'antd';

const RadioGroup: React.FC<{
  [propName: string]: any;
}> = ({ onChange, ...props }) => {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
  };
  return <Radio.Group onChange={handleChange} {...props} />;
};

export default RadioGroup;
