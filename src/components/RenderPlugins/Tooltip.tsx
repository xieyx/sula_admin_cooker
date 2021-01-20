import React from 'react';
import { Tooltip as ATooltip } from 'antd';

const Tooltip: React.FC<{
  [propName: string]: any;
}> = ({ title, children, ...props }) => {
  return (
    <ATooltip title={title} {...props}>
      <span>{children}</span>
    </ATooltip>
  );
};

export default Tooltip;
