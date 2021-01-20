import React, { useState, useEffect } from 'react';
import { Form } from 'sula';
import pickBy from 'lodash/pickBy';
import { CloseOutlined, DeleteOutlined, CopyOutlined } from '@ant-design/icons';
import { FormItemProps } from './Form.d';
import ComponentProps from './ComponentProps';
import HelpButton from '../HelpButton';

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

const getUpdatedSetting = (currentFieldSetting?: FormItemProps, fieldId?: number) => {
  let fieldProps;
  let formItemProps;
  if (currentFieldSetting) {
    const { field, name, label, valuePropName, initialSource, type, id, ...other } =
      currentFieldSetting.filter((row: any) => {
        return row.id === fieldId;
      })[0] || {};
    if (field === undefined || typeof field === 'string') {
      fieldProps = {};
    } else {
      fieldProps = { ...field.props };
    }
    formItemProps = { name, label, ...other };
  }

  return [fieldProps, formItemProps];
};

export interface SettingProps {
  id?: number;
  componentName?: string;
  componentChildren?: React.ReactNode;
  setVisible?: () => void;
  updateSetting?: (values: any) => void;
  setDeletedField?: (id: number) => void;
  openCode?: (visible: boolean) => void;
  [propName: string]: any;
}

export declare type TabType = 'form' | 'basic' | 'field' | 'pro';

const filterByKey = (raw: any, allowed: string[]) =>
  Object.keys(raw)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[key] = raw[key];
      return obj;
    }, {});

const Setting: React.FC<SettingProps> = ({
  id,
  type,
  alias,
  onFinish,
  setVisible,
  updateSetting,
  setDeletedField,
  setCopiedField,
  openCode,
  currentFieldSetting,
}) => {
  const [tab, setTab] = useState<TabType>('basic');
  const formRef = React.createRef<any>();

  const componentType = alias || type;

  const defaultBasic: any = propsReduce(ComponentProps['Form.Item']);
  const defaultProps: any = propsReduce(ComponentProps[componentType] || {});

  useEffect(() => {
    setTab('basic');
    formRef.current.resetFields();
    const [updatedFieldProps, updatedFormItemProps] = getUpdatedSetting(currentFieldSetting, id);
    formRef.current.setFieldsValue({
      'Form.Item': pickBy({ ...defaultBasic, ...updatedFormItemProps }, (value) => {
        return value !== undefined && value !== null;
      }),
      [componentType]: pickBy({ ...defaultProps, ...updatedFieldProps }, (value) => {
        return value !== undefined && value !== null;
      }),
    });
  }, [id]);

  useEffect(() => {
    formRef.current.resetFields();
    const [updatedFieldProps, updatedFormItemProps] = getUpdatedSetting(currentFieldSetting, id);
    formRef.current.setFieldsValue({
      'Form.Item': pickBy({ ...defaultBasic, ...updatedFormItemProps }, (value) => {
        return value !== undefined && value !== null;
      }),
      [componentType]: pickBy({ ...defaultProps, ...updatedFieldProps }, (value) => {
        return value !== undefined && value !== null;
      }),
    });
  }, [currentFieldSetting]);

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
              // onChange: (e: any) => {
              //   console.log(e)
              //   // formRef.current.setFieldValue([fieldType, prop], e.target.value);
              // },
              // onBlur: (e: any) => {
              //   console.log(e)
              //   formRef.current.setFieldValue([fieldType, prop], e.target.value);
              // },
            };
            break;
          case 'boolean':
            // field = {type: 'switch', props: {defaultChecked: true}};
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
              // elseProps = {
              //   initialSource: [
              //     { value: '', text: `--请选择 ${prop}--` },
              //     ...fieldProps[prop][1].split(/\s*\|\s*/).map((item: string) => {
              //       const newItem = item.replace(/(['"`])([^'"`]+)\1/, '$2').trim();
              //       return {
              //         value: newItem,
              //         text: newItem,
              //       };
              //     }),
              //   ],
              // };
            } else {
              field = undefined;
              elseProps = {
                render: {
                  type: 'link',
                  props: {
                    children: '在代码中编辑',
                    onClick: (event: any) => {
                      event.preventDefault();
                      if (openCode) {
                        openCode(true);
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
        filterByKey(ComponentProps['Form.Item'], ['name', 'label', 'initialValue', 'hidden']),
        'Form.Item',
      ),
      ...fieldsParse(filterByKey(fieldProps, ['disabled']), componentType),
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
              if (setCopiedField && id) {
                setCopiedField(id);
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
              if (setDeletedField && id) {
                setDeletedField(id);
              }
            },
          },
        },
      },
    ],
  };
  return (
    <Form
      ref={formRef}
      onValuesChange={(changedValues: any) => {
        if (updateSetting) {
          updateSetting(changedValues);
        }
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
                if (setVisible) {
                  setVisible();
                }
              }}
            />
          ),
          tabProps: {
            size: 'small',
          },
        },
      }}
      // actionsRender={[{
      //   type: 'button',
      //   props: {
      //     children: '确定',
      //     type: 'primary'
      //   },
      //   action: [
      //     (ctx: any) => {
      //       ctx.form.submit()
      //     },
      //   ]
      // }, {
      //   type: 'button',
      //   props: {
      //     children: '取消',
      //   },
      //   action: [
      //     (ctx: any) => {
      //       // ctx.form.submit()
      //       console.log(1)
      //     },
      //   ]
      // }]}
      onFinish={onFinish}
      layout="vertical"
    />
  );
};

export default Setting;
