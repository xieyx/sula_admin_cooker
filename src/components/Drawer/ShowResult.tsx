import React, { useState, useEffect } from 'react';
import { Descriptions, Modal } from 'antd';

export type ShowResultProps = {
  title?: string;
  items?: {
    label: string;
    content: string;
  }[];
};

const ShowResult: React.FC<ShowResultProps> = ({ title, items }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (items === undefined) {
      return;
    }
    setVisible(true);
  }, [items]);

  const onOk = () => {
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} onOk={onOk} onCancel={onCancel}>
      <Descriptions title={title} column={1} bordered>
        {items?.map((item) => (
          <Descriptions.Item label={item.label} key={item.label}>
            {item.content}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Modal>
  );
};

export default ShowResult;
