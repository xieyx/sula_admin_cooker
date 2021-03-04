import React, { useState, useEffect, useRef } from 'react';
import { useModel } from 'umi';
import { Form as SForm } from 'sula';
// import Sortable, { Swap } from "sortablejs";
import type { DrawerFormProps } from './Form.d';
import ShowResult from './ShowResult';

// Sortable.mount(new Swap());

const Form: React.FC<DrawerFormProps> = ({ sortable, sortableProps }) => {
  const formRef = useRef<any>();
  const { currentField, settingTrigger, mode, setFormFields, queue, current } = useModel('form');
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
        fields={
          queue[current]?.map((field) => ({
            ...field,
            className: currentField === field.id ? 'sform-item-chosen' : undefined,
            onClick:
              sortable && mode === 'view'
                ? (event: any) => {
                    event.preventDefault();
                    settingTrigger(field);
                  }
                : undefined,
          })) || []
        }
        actionsRender={
          mode === 'edit' && queue[current].length
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
                  list: queue[current] || [],
                  setList: setFormFields,
                  onChoose: () => document.body.classList.add('dragging'), // Dragging started
                  onStart: () => document.body.classList.add('dragging'), // Dragging started
                  onUnchoose: () => document.body.classList.remove('dragging'), // Dragging ended
                  onEnd: () => document.body.classList.remove('dragging'), // Dragging ended
                  forceFallback: true,
                  // fallbackTolerance: 0,
                  // swap: true,
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
