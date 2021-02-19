import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Form } from 'sula';
import { useModel } from 'umi';
import { CloseOutlined, DeleteOutlined, CopyOutlined } from '@ant-design/icons';
import pick from 'lodash/pick';
import pickBy from 'lodash/pickBy';
import type { FormItemProps } from './Form.d';
import ComponentProps from './ComponentProps';
import HelpButton from '../HelpButton';

export declare type TabType = 'form' | 'basic' | 'field' | 'pro';

const propsReduce = (props: any) => {
  return Object.keys(props).reduce((values: any, prop: string) => {
    const { [prop]: fieldProp } = props;
    // console.log(prop, fieldProp)
    switch (typeof fieldProp[2]) {
      case 'object':
        return {
          ...values,
          [prop]: fieldProp[2] ? JSON.stringify(fieldProp[2]) : undefined,
        };
      case 'string':
        return {
          ...values,
          [prop]: fieldProp[2].length === 0 ? undefined : fieldProp[2],
        };
      default:
        return {
          ...values,
          [prop]: fieldProp[2],
        };
    }
  }, {});
};

const getUpdatedSetting = (currentFieldSetting?: FormItemProps) => {
  let fieldProps;
  let formItemProps;
  // console.log(currentFieldSetting)
  if (currentFieldSetting) {
    const { field, name, label, valuePropName, initialSource, type, id, ...other } =
      currentFieldSetting || {};
    if (field === undefined || typeof field === 'string') {
      fieldProps = {};
    } else {
      fieldProps = { ...field.props };
    }
    formItemProps = { name, label, ...other };
  }

  return [fieldProps, formItemProps];
};

const Setting: React.FC = () => {
  const {
    // currentFieldSetting,
    currentField,
    settingTrigger,
    updateSetting,
    deleteField,
    copyField,
    codeTrigger,
    prevQueue,
    editor,
    code,
  } = useModel('form');
  const [tab, setTab] = useState<TabType>('basic');
  const formRef = useRef<any>();
  const currentFieldSetting = useMemo(() => {
    return prevQueue.length > 0
      ? prevQueue[prevQueue.length - 1].filter((r) => r.id === currentField)[0]
      : undefined;
  }, [prevQueue, currentField]);
  const componentType = currentFieldSetting?.alias || currentFieldSetting?.type;

  useEffect(() => {
    if (formRef?.current === undefined || formRef.current === null) {
      return;
    }
    const defaultBasic: any = propsReduce(ComponentProps['Form.Item']);
    const defaultProps: any = propsReduce(ComponentProps[componentType] || {});
    const [updatedFieldProps, updatedFormItemProps] = getUpdatedSetting(currentFieldSetting);
    formRef.current.resetFields();
    formRef.current.setFieldsValue({
      'Form.Item': pickBy({ ...defaultBasic, ...updatedFormItemProps }, (value) => {
        return value !== undefined && value !== null;
      }),
      [componentType]: pickBy({ ...defaultProps, ...updatedFieldProps }, (value) => {
        return value !== undefined && value !== null;
      }),
    });
  }, [componentType, currentFieldSetting]);

  useEffect(() => {
    if (formRef?.current === undefined || formRef.current === null) {
      return;
    }
    setTab('basic');
  }, [componentType]);

  const fieldsParse = (fieldProps: any, fieldType: string) =>
    Object.keys(fieldProps)
      ?.map((prop) => {
        if (
          [
            'value',
            'checked',
            'fileList',
            'defaultValue',
            'defaultChecked',
            'defaultFileList',
          ].indexOf(prop) !== -1
        ) {
          return null;
        }
        let field;
        let elseProps;
        const [fieldPropsType] =
          fieldProps[prop][1]
            .toLocaleLowerCase()
            .match(
              /(function|\([^)]*\)|\w+\s*=>|{[^}]*}|array|\[[^]]*\]|string\[\]|any\[\]|any|string|boolean|number|namepath|reactnode)/,
            ) || [];
        switch (fieldPropsType) {
          case 'number':
            field = {
              type: 'CustomInputNumber',
              props: {
                onChange: (e: any) => {
                  formRef.current.setFieldValue([fieldType, prop], e);
                },
                size: 'small',
              },
            };
            elseProps = {
              trigger: 'onBlur',
            };
            break;
          case 'boolean':
            field = {
              type: 'switch',
              props: {
                size: 'small',
              },
            };
            elseProps = { valuePropName: 'checked' };
            break;
          case 'any':
          case 'string':
          case 'reactnode':
          case 'namepath':
            field = {
              type: 'input',
              props: {
                placeholder: fieldProps[prop][1],
                size: 'small',
              },
            };
            elseProps = {
              trigger: 'onBlur',
              onChange: (e: any) => {
                formRef.current.setFieldValue([fieldType, prop], e.target.value);
              },
            };
            break;
          default:
            if (/function|\([^)]*\)|\w+\s*=>/i.test(fieldProps[prop][1])) {
              return null;
            }
            if (/^(?:(['`])[^'`]+\1\s*\|\s*)+\1[^'`]+\1$/.test(fieldProps[prop][1])) {
              // enum
              field = {
                type: 'CustomRadioGroup',
                props: {
                  optionType: 'button',
                  size: 'small',
                  buttonStyle: 'solid',
                  options: [
                    ...fieldProps[prop][1].split(/\s*\|\s*/).map((item: string) => {
                      const newItem = item.replace(/(['"`])([^'"`]+)\1/, '$2').trim();
                      return {
                        value: newItem,
                        label: newItem,
                      };
                    }),
                  ],
                },
              };
            } else {
              field = undefined;
              elseProps = {
                render: {
                  type: 'link',
                  props: {
                    children: '在代码中编辑',
                    onClick: (event: any) => {
                      event.preventDefault();
                      // codeTrigger(prop, currentFieldSetting?.id);
                      codeTrigger();
                      if (editor !== undefined) {
                        editor.getAction('editor.action.formatDocument').run();
                        let startLineNumber;
                        const startColumn = 17;
                        let endLineNumber;
                        const endColumn = 17;
                        let flag = false;
                        code?.split(/[\r\n]/)?.map((row: string, i: number) => {
                          const [k, v] = row.split(':');
                          if (
                            k.trim() === '"props"' &&
                            v.trim().indexOf('{') === 0 &&
                            flag === false
                          ) {
                            startLineNumber = i + 1;
                            endLineNumber = i + 1;
                          }
                          if (
                            k.trim() === '"id"' &&
                            v.trim() === currentFieldSetting?.id?.toString()
                          ) {
                            flag = true;
                          }
                          return row;
                        });
                        if (startLineNumber === undefined || endLineNumber === undefined) {
                          return;
                        }
                        editor.executeEdits('insert-code', [
                          {
                            range: {
                              startLineNumber,
                              startColumn,
                              endLineNumber,
                              endColumn,
                            },
                            text: `"${prop}": ,`,
                          },
                        ]);
                        editor.setSelection({
                          // selectionStartLineNumber: startLineNumber,
                          // selectionStartColumn: startColumn,
                          // positionLineNumber: endLineNumber,
                          // positionColumn: endColumn,
                          startLineNumber,
                          startColumn,
                          endLineNumber,
                          endColumn: endColumn + prop.length + 5,
                        });
                        editor.getAction('editor.action.formatDocument').run();
                        editor.focus();
                      }
                    },
                  },
                },
              };
            }
        }
        return {
          field,
          name: [fieldType, prop],
          label: <HelpButton title={prop} content={`类型: ${fieldProps[prop][1]}`} />,
          extra: React.createElement('div', {
            dangerouslySetInnerHTML: { __html: fieldProps[prop][0] },
          }),
          ...elseProps,
        };
      })
      .filter((row) => row !== null);

  const fieldProps = ComponentProps[componentType] || {};
  const tabList = [
    { key: 'basic', tab: '基础' },
    { key: 'field', tab: '字段' },
    { key: 'form', tab: '表单' },
    { key: 'pro', tab: '高级' },
  ];
  const contentList = {
    basic: [
      ...fieldsParse(
        pick(ComponentProps['Form.Item'], ['name', 'label', 'initialValue', 'hidden']),
        'Form.Item',
      ),
      ...fieldsParse(pick(fieldProps, ['disabled']), componentType),
    ],
    field: fieldsParse(fieldProps, componentType),
    form: fieldsParse(ComponentProps['Form.Item'], 'Form.Item'),
    pro: [
      {
        label: '复制表单字段',
        name: 'copy',
        render: {
          type: 'button',
          props: {
            children: '复制',
            type: 'default',
            icon: <CopyOutlined />,
            onClick: (event: any) => {
              event.preventDefault();
              if (currentFieldSetting?.id) {
                copyField(currentFieldSetting.id);
              }
            },
          },
        },
      },
      {
        label: '删除表单字段',
        name: 'del',
        render: {
          type: 'button',
          props: {
            children: '删除',
            type: 'danger',
            icon: <DeleteOutlined />,
            onClick: (event: any) => {
              event.preventDefault();
              if (currentFieldSetting?.id) {
                deleteField(currentFieldSetting.id);
              }
            },
          },
        },
      },
    ],
  };
  return currentFieldSetting ? (
    <Form
      ref={formRef}
      onValuesChange={(changedValues: any) => {
        updateSetting(changedValues);
      }}
      fields={contentList[tab]}
      container={{
        type: 'card',
        props: {
          title: '配置',
          bordered: false,
          type: 'inner',
          size: 'small',
          tabList,
          activeTabKey: tab,
          onTabChange: (key: TabType) => {
            setTab(key);
          },
          extra: (
            <CloseOutlined
              onClick={(event) => {
                event.preventDefault();
                settingTrigger();
              }}
            />
          ),
          tabProps: {
            size: 'small',
          },
        },
      }}
      layout="vertical"
    />
  ) : null;
};

export default Setting;
