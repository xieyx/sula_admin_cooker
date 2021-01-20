import React from 'react';
import { PageHeader } from 'antd';
import Workspace from '@/components/Drawer/Workspace';
import { getForm, saveForm } from './services';

const FormBuilder: React.FC<{ match: any }> = ({ match }) => {
  const query: any = match.params;
  return (
    <PageHeader title="表单编辑器" className="site-page-header">
      <Workspace id={query?.id} getForm={getForm} saveForm={saveForm} />
    </PageHeader>
  );
};

export default FormBuilder;
