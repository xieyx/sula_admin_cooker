import React from 'react';
import { Tooltip, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styles from './index.less';

const HelpButton: React.FC<{ title: string; content: string }> = ({ title, content }) => (
  <Space size={3}>
    {title}
    <Tooltip title={content} overlayStyle={{ whiteSpace: 'pre-line' }}>
      <QuestionCircleOutlined className={styles.Icon} />
    </Tooltip>
  </Space>
);

export default HelpButton;
