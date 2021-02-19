import React, { useState, useEffect, useRef } from 'react';
import { useModel } from 'umi';
import { Form as SForm } from 'sula';
import type { FormItemProps, DrawerFormProps } from './Form.d';
import ShowResult from './ShowResult';

const Form: React.FC<DrawerFormProps> = ({ sortable, sortableProps }) => {
  const formRef = useRef<any>();
  const { currentField, settingTrigger, mode, formFields, setFormFields } = useModel('form');
  const [results, setResults] = useState<any[]>();

  useEffect(() => {
    formRef.current.resetFields();
  }, [mode]);

  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log('Received values of form: ', values);
    setResults(
      Object.keys(values).reduce(
        (ret: any[], field: string) => [
          ...ret,
          {
            label: field,
            content: values[field]?.toLocaleString() || '',
          },
        ],
        [],
      ),
    );
  };

  return (
    <>
      <SForm
        ref={formRef}
        mode={mode}
        fields={formFields.map((field: FormItemProps) => ({
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
          className: currentField === field.id ? 'sform-item-chosen' : undefined,
          onClick:
            sortable && mode === 'view'
              ? (event: any) => {
                  event.preventDefault();
                  settingTrigger(field);
                }
              : undefined,
          ...field['Form.Item'],
        }))}
        actionsRender={
          mode === 'edit' && formFields.length
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
              ]
            : undefined
        }
        onFinish={onFinish}
        container={
          sortable && mode === 'view'
            ? {
                type: 'ReactSortable',
                props: {
                  list: formFields,
                  setList: setFormFields,
                  ...sortableProps,
                },
              }
            : undefined
        }
        layout="vertical"
      />
      <ShowResult title="结果" items={results} />
    </>
  );
};

export default Form;
