import React, { useState } from 'react';
import { Form, registerRenderPlugin } from 'sula';
import { ReactSortable } from 'react-sortablejs';
import { FormItemProps, FormProps } from './Form.d';

registerRenderPlugin('ReactSortable')(ReactSortable, true);

const Drawer: React.FC<FormProps> = ({ sortable, sortableProps, onFinish }) => {
  const [list, setList] = useState<FormItemProps[]>([]);
  // const onFinish = (values: any) => {
  //   // mapValues(values, (value, key) => {
  //   //   console.log(value, typeof value)
  //   //   return value
  //   // })
  //   console.log('Received values of form: ', values);
  // };
  return (
    <Form
      fields={list.map((field) => ({
        field: field.field,
        name: field.type,
        label: field.name,
        valuePropName: field.valuePropName,
      }))}
      // actionsRender={list.length ? [{
      //   type: 'button',
      //   props: {
      //     children: '提交',
      //     type: 'primary'
      //   },
      //   action: [
      //     (ctx: any) => {
      //       console.log(ctx, 'action ctx')
      //     },
      //   ]
      // }] : undefined}
      onFinish={onFinish}
      container={
        sortable
          ? {
              type: 'ReactSortable',
              props: {
                list,
                setList,
                ...sortableProps,
              },
            }
          : undefined
      }
      style={{ height: '100%' }}
    />
  );
};

export default Drawer;
