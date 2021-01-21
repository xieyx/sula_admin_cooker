import React, { useEffect, useState } from 'react';
import { history, useActivate } from 'umi';
import { Form } from 'sula';
import { PageHeader, Card } from 'antd';
import type { FormItemProps } from '@/components/Drawer/Form.d';
import withKeepAlive from '@/components/KeepAlive';
import { getForm } from './services';

const RowSave: React.FC<{ location: any }> = ({ location }) => {
  const { query } = location;
  const formRef = React.createRef<any>();
  const [list, setList] = useState<FormItemProps[]>([]);
  const [refreshForm, setRefreshForm] = useState<boolean>(true);

  useActivate(() => {
    setRefreshForm(true);
  });

  useEffect(() => {
    if (refreshForm === false) {
      return;
    }

    (async () => {
      const currentForm = await getForm(query?.id);
      try {
        const { fields } = currentForm?.data;
        setList([
          ...JSON.parse(fields).map((row: any) => {
            const { field, valuePropName, initialSource, type, id, ...other } = row;
            return {
              field,
              valuePropName,
              initialSource,
              type,
              id,
              'Form.Item': other,
            };
          }),
        ]);
        setRefreshForm(false);
      } catch (e) {
        // request error
      }
    })();
  }, [query, refreshForm]);

  const onFinish = (values: any) => {
    // mapValues(values, (value, key) => {
    //   console.log(value, typeof value)
    //   return value
    // })
    // eslint-disable-next-line no-console
    console.log('Received values of form: ', values);
  };

  return (
    <PageHeader
      title="title"
      className="site-page-header"
      subTitle="sub title"
      onBack={() => history.goBack()}
    >
      <Card bordered={false}>
        <Form
          ref={formRef}
          mode="create"
          fields={list.map((field: FormItemProps) => ({
            field: {
              ...(typeof field.field === 'string' ? { type: field.field } : field.field),
              props: {
                ...field.field.props,
                ...field[field.type],
              },
            },
            name: `${field.type}_${field.id}`,
            label: field.name,
            valuePropName: field.valuePropName,
            initialSource: field.initialSource,
            ...field['Form.Item'],
          }))}
          actionsRender={
            list.length
              ? [
                  {
                    type: 'button',
                    props: {
                      children: '提交',
                      type: 'primary',
                    },
                    action: [
                      (ctx: any) => {
                        ctx.form.submit();
                      },
                    ],
                  },
                  {
                    type: 'button',
                    props: {
                      children: '重置',
                      type: 'default',
                    },
                    action: ['resetFields'],
                  },
                ]
              : undefined
          }
          onFinish={onFinish}
        />
      </Card>
    </PageHeader>
  );
};

export default withKeepAlive(RowSave);
