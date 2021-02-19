import React, { useEffect } from 'react';
import { PageHeader, notification } from 'antd';
import { history, useModel, useLocation } from 'umi';
import useBreadcrumb from '@/components/Breadcrumb';
import Workspace from '@/components/Drawer/Workspace';
import { createId } from '@/components/Drawer/Form.d';
import { getForm, saveForm } from './services';

const FormBuilder: React.FC<{ match: any }> = ({ match }) => {
  const { prevQueue, setInitialState } = useModel('form');
  const breadcrumb = useBreadcrumb(match);
  const location: any = useLocation();
  const { query } = location;
  const { id } = query;

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    (async () => {
      const currentForm = await getForm(id);
      try {
        setInitialState(JSON.parse(currentForm?.data?.fields));
      } catch (e) {
        // request error
      }
    })();
  }, [id, setInitialState]);

  const saveHandle = (event: React.MouseEvent) => {
    event.preventDefault();
    (async () => {
      const response = await saveForm({
        id: id || createId().toLocaleString(),
        fields: JSON.stringify(prevQueue[prevQueue.length - 1]),
      });
      if (response && response.errorCode === 0) {
        notification.success({
          message: `保存成功`,
        });
        history.push('/list');
      }
    })();
  };

  return (
    <PageHeader
      // title="表单编辑器"
      className="site-page-header"
      breadcrumb={breadcrumb}
    >
      <Workspace saveHandle={saveHandle} />
    </PageHeader>
  );
};

export default FormBuilder;
