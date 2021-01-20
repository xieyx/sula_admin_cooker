import type { ReactSortableProps } from 'react-sortablejs';
import type { FormProps as SFormProps } from 'sula';
import type { FormProps as AntdFormProps, FormItemProps as AntdFormItemProps } from 'antd/lib/form';
import type { SortableItem } from '@/@types';

let id = new Date().getTime();
export const createId = () => {
  // eslint-disable-next-line no-plusplus
  return id++;
};

const defs = { chosen: false, filtered: false, selected: false };
export function dragDefs<T>(P: T[]) {
  return P.map((R: T) => ({ ...defs, ...R, id: createId() }));
}

export type FormItemProps = Record<string> & Omit<AntdFormItemProps, 'id' | 'children'> & Partial<SortableItem>

export type FormProps = {
  options?: FormItemProps[];
  sortable?: boolean;
  sortableProps?: omit<ReactSortableProps, 'list' | 'setList'>;
} & AntdFormProps

export type DrawerFormProps = {
  sortable?: boolean;
  sortableProps?: Omit<ReactSortableProps, 'list' | 'setList'>;
  settingTrigger?: (field) => void;
  // codeView?: (fields) => void;
  changedFieldSetting?: any;
  allFieldSetting?: FormItemProps[];
  deletedField?: number;
  copiedField?: number;
  setHistory?: (list: FormItemProps[]) => void;
} & Partial<SFormProps>

export type CustomComponentProps = {
  type: string;
  name: string;
  child?: CustomComponentProps[];
  [propName: string]: any;
}

export const CustomComponentsDefault: CustomComponentProps[] = [
  {
    type: 'Input',
    field: 'input',
    name: '输入框',
  },
  {
    type: 'Input.TextArea',
    field: 'textarea',
    name: '文本域',
  },
  {
    type: 'Input.Password',
    field: 'password',
    name: '密码输入框',
  },
  {
    type: 'InputNumber',
    field: 'inputnumber',
    name: '数字输入框',
  },
  {
    type: 'Switch',
    field: 'CustomSwitch',
    name: '开关',
    valuePropName: 'checked',
  },
  {
    type: 'Radio.Group',
    field: {
      type: 'CustomRadioGroup',
      props: {
        options: [
          {
            value: 'apple',
            label: '苹果',
          },
          {
            value: 'banana',
            label: '香蕉',
          },
        ],
      },
    },
    name: '单选框组合',
  },
  {
    type: 'Checkbox.Group',
    field: {
      type: 'CustomCheckboxGroup',
      props: {
        options: [
          {
            value: 'apple',
            label: '苹果',
          },
          {
            value: 'banana',
            label: '香蕉',
          },
        ],
      },
    },
    name: '复选框组合',
  },
  {
    type: 'DatePicker',
    field: {
      type: 'datepicker',
      props: {
        valueFormat: true,
      },
    },
    name: '日期选择器',
  },
  {
    type: 'DatePicker.RangePicker',
    field: {
      type: 'rangepicker',
      props: {
        valueFormat: true,
      },
    },
    name: '区间选择器',
  },
  {
    type: 'TimePicker',
    field: {
      type: 'timepicker',
      props: {
        valueFormat: true,
      },
    },
    name: '时间选择器',
  },
  {
    type: 'Select',
    field: {
      type: 'select',
      props: {
        options: [
          {
            value: 'apple',
            label: '苹果',
          },
          {
            value: 'banana',
            label: '香蕉',
          },
        ],
      },
    },
    name: '下拉选择框',
  },
  {
    type: 'SelectSearch',
    alias: 'Select',
    field: {
      type: 'SelectSearch',
      props: {
        options: [
          {
            value: 'apple',
            label: '苹果',
          },
          {
            value: 'banana',
            label: '香蕉',
          },
        ],
        showSearch: true,
        filterOption: false,
        showArrow: false,
        labelInValue: true,
      },
    },
    name: '下拉搜索框',
  },
  {
    type: 'TreeSelect',
    field: {
      type: 'treeselect',
      props: {
        treeData: [
          {
            title: '水果',
            value: 'fruit',
            children: [
              {
                title: '苹果',
                value: 'apple',
              },
            ],
          },
        ],
      },
    },
    name: '树选择',
  },
  {
    type: 'Upload',
    field: {
      type: 'SinaS3Upload',
      props: {
        action: '/v1/upload/upload',
        // listType: 'picture-card',
        // showUploadList: false,
        slice: -1,
        data: {
          // dir: 'jrdev',
        },
      },
    },
    name: '点击上传',
    valuePropName: 'fileList',
  },
  // {
  //   type: 'Slider',
  //   field: {
  //     type: 'slider',
  //     props: {
  //       dots: true,
  //       step: 1,
  //       min: 0,
  //       max: 10,
  //     },
  //   },
  //   name: '滑动输入条',
  // },
  {
    type: 'Rate',
    field: 'rate',
    name: '评分',
  },
];
