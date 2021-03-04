import { useCallback, useState } from 'react';
// import { message } from 'antd';
import type { Sortable } from 'react-sortablejs';
import slice from 'lodash/slice';
import type { FormItemProps } from '@/components/Drawer/Form.d';
import { createId } from '@/components/Drawer/Form.d';

export default () => {
  const [componentVisible, setComponentVisible] = useState<boolean>(true);
  const [settingVisible, setSettingVisible] = useState<boolean>(false);
  const [codeVisible, setCodeVisible] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [currentField, setCurrentField] = useState<number>();
  const [mode, setMode] = useState<'view' | 'create' | 'edit'>('view');
  const [code, setCode] = useState<string>();
  const [editor, setEditor] = useState<any>();
  const [current, setCurrent] = useState<number>(-1);
  const [queue, setQueue] = useState<FormItemProps[][]>([]);

  const setPreviewMode = () => {
    setMode('edit');
    setComponentVisible(false);
    setCodeVisible(false);
    setSettingVisible(false);
  };

  const setEditMode = () => {
    setMode('view');
    if (codeVisible) {
      setCodeVisible(false);
      setTimeout(() => {
        setComponentVisible(true);
      }, 200);
    } else {
      setComponentVisible(true);
    }
  };

  const setInitialState = useCallback((fields: FormItemProps[]) => {
    setComponentVisible(true);
    setSettingVisible(false);
    setCodeVisible(false);
    setFullscreen(false);
    setCurrentField(undefined);
    setMode('view');
    setCode(JSON.stringify(fields, null, 2));
    setQueue([]);
    setCurrent(-1);
  }, []);

  const setHistory = (list: FormItemProps[], flag?: boolean) => {
    if (queue.length > 0 && JSON.stringify(queue[current]) === JSON.stringify(list)) {
      return;
    }

    setQueue([...slice(queue, 0, current + 1), list]);
    setCurrent(current + 1);

    if (flag !== false) {
      setCode(JSON.stringify(list, null, 2));
    }
  };

  const setFormFields = (newState: FormItemProps[], sortable: Sortable | null = null) => {
    setHistory(
      newState.map(({ chosen, filtered, selected, ...field }) => field),
      sortable !== null,
    );
  };

  const doPrev = () => {
    if (queue.length <= 1 || current <= 0) {
      return;
    }
    setCurrent(current - 1);
    setCode(JSON.stringify(queue[current - 1], null, 2));
  };

  const doNext = () => {
    if (queue.length <= 1 || queue.length <= current) {
      return;
    }
    setCurrent(current + 1);
    setCode(JSON.stringify(queue[current + 1], null, 2));
  };

  const componentsTrigger = () => {
    if (componentVisible) {
      return;
    }
    if (codeVisible) {
      setCodeVisible(false);
      setTimeout(() => {
        setComponentVisible(true);
      }, 200);
    } else {
      setComponentVisible(true);
    }
  };

  const codeTrigger = () => {
    if (codeVisible) {
      return;
    }

    if (componentVisible) {
      setComponentVisible(false);
      setTimeout(() => {
        setCodeVisible(true);
      }, 200);
    } else {
      setCodeVisible(true);
    }
  };

  const settingTrigger = (field?: FormItemProps) => {
    if (field === undefined) {
      setSettingVisible(false);
      return;
    }
    setCurrentField(field.id);
    if (settingVisible) {
      return;
    }
    setSettingVisible(true);
  };

  const updateSetting = (value: any) => {
    // console.log(value);
    setHistory([
      ...queue[current]?.map((row) => {
        if (row.id === currentField) {
          return {
            ...row,
            field: {
              ...row.field,
              props: {
                ...row.field.props,
                ...value[row.type],
              },
            },
            ...value['Form.Item'],
          };
        }

        return row;
      }),
    ]);
  };

  const deleteField = (id: any) => {
    setHistory([...queue[current]?.filter((row) => row.id !== id)]);
    settingTrigger();
  };

  const copyField = (id: any) => {
    setHistory([
      ...queue[current],
      ...queue[current]
        ?.filter((row) => {
          return row.id === id;
        })
        .map((row) => {
          const newid = createId();
          return {
            ...row,
            id: newid,
            name: `${row.type}_${newid}`,
          };
        }),
    ]);
    settingTrigger();
  };

  const codeConfirm = (value: string) => {
    if (value === undefined) {
      return;
    }

    try {
      setHistory(JSON.parse(value), false);
      // message.success('配置已生效');
    } catch {
      // message.error('格式错误');
    }
  };

  return {
    code,
    componentVisible,
    settingVisible,
    codeVisible,
    fullscreen,
    currentField,
    mode,
    setComponentVisible,
    setSettingVisible,
    setCodeVisible,
    setFullscreen,
    setMode,
    setHistory,
    codeTrigger,
    settingTrigger,
    updateSetting,
    setPreviewMode,
    setEditMode,
    doPrev,
    doNext,
    setCode,
    setFormFields,
    deleteField,
    copyField,
    codeConfirm,
    setInitialState,
    componentsTrigger,
    editor,
    setEditor,
    current,
    queue,
  };
};
