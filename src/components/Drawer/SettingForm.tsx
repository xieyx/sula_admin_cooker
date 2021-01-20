import React from 'react';
import { Button } from 'antd';
import { ModalForm } from 'sula';

export interface SettingFormProps {
  id?: string;
  componentName?: string;
  componentChildren?: React.ReactNode;
  [propName: string]: any;
}

const SettingForm: React.FC<SettingFormProps> = () => {
  const modalFormRef = React.useRef<any>();
  return (
    <>
      <ModalForm ref={modalFormRef} />
      <Button
        onClick={() => {
          modalFormRef.current.show({
            title: 'Head',
            width: 500,
            fields: [
              {
                field: 'input',
                name: 'input',
                label: 'input',
              },
            ],
            submit: {
              url: '/v1/api',
            },
          });
        }}
      >
        弹窗
      </Button>
    </>
  );
};

export default SettingForm;
