import React from 'react';
import { InputNumber as AInputNumber } from 'antd';

const InputNumber: React.FC<{
  [propName: string]: any;
}> = ({ onChange, ...props }) => {
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
  };
  return <AInputNumber onChange={handleChange} {...props} />;
};

export default InputNumber;
