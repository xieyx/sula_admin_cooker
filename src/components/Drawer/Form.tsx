import React, { useState, useEffect } from 'react';
import { Form as SForm } from 'sula';
import type { FormItemProps, DrawerFormProps } from './Form.d';
import { createId } from './Form.d';

const Form: React.FC<DrawerFormProps> = ({
  mode,
  sortable,
  sortableProps,
  settingTrigger,
  changedFieldSetting,
  allFieldSetting,
  deletedField,
  copiedField,
  setHistory,
}) => {
  const formRef = React.createRef<any>();
  const [list, setList] = useState<FormItemProps[]>([]);
  const [currentChosen, setCurrentChosen] = useState<number>();

  useEffect(() => {
    formRef.current.resetFields();
  }, [mode]);

  useEffect(() => {
    if (!copiedField) {
      return;
    }

    setList([
      ...list,
      ...list
        .filter((row) => {
          return row.id === copiedField;
        })
        .map((row) => {
          const id = createId();
          return {
            ...row,
            id,
            'Form.Item': {
              ...row['Form.Item'],
              name: `${row.type}_${id}`,
            },
          };
        }),
    ]);
  }, [copiedField]);

  useEffect(() => {
    if (!deletedField) {
      return;
    }

    setList([
      ...list.filter((row) => {
        return row.id !== deletedField;
      }),
    ]);
  }, [deletedField]);

  useEffect(() => {
    if (!currentChosen || changedFieldSetting === undefined) {
      return;
    }

    setList([
      ...list.map((row) => {
        if (row.id === currentChosen) {
          return {
            ...row,
            [row.type]: {
              ...row[row.type],
              ...changedFieldSetting[row.type],
            },
            'Form.Item': {
              ...row['Form.Item'],
              ...changedFieldSetting['Form.Item'],
            },
          };
        }

        return row;
      }),
    ]);
  }, [currentChosen, changedFieldSetting]);

  useEffect(() => {
    if (allFieldSetting === undefined || allFieldSetting === null) {
      return;
    }
    setList([
      ...allFieldSetting.map((row: any) => {
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
  }, [allFieldSetting]);

  useEffect(() => {
    const history = list.map((field: any) => ({
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
      type: field.type,
      id: field.id,
      ...field['Form.Item'],
    }));
    if (setHistory) {
      setHistory(history);
    }
  }, [list]);

  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log('Received values of form: ', values);
  };
  // const validateMessages = {
  //   required: '${name} 是必选字段',
  //   // ...
  // };
  return (
    <SForm
      ref={formRef}
      mode={mode}
      // validateMessages={validateMessages}
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
        className: currentChosen === field.id ? 'sform-item-chosen' : undefined,
        onClick:
          sortable && mode === 'view'
            ? (event: any) => {
                event.preventDefault();
                setCurrentChosen(field.id);
                if (settingTrigger) {
                  settingTrigger(field);
                }
              }
            : undefined,
        ...field['Form.Item'],
      }))}
      actionsRender={
        mode === 'edit' && list.length
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
                list,
                setList,
                ...sortableProps,
              },
            }
          : undefined
      }
      layout="vertical"
    />
  );
};

export default Form;
