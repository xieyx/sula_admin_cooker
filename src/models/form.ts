import { useCallback, useState } from 'react';
// import { message } from 'antd';
import type * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
import type { FormItemProps } from '@/components/Drawer/Form.d';
import { createId } from '@/components/Drawer/Form.d';

export default () => {
  const [componentVisible, setComponentVisible] = useState<boolean>(true);
  const [settingVisible, setSettingVisible] = useState<boolean>(false);
  const [codeVisible, setCodeVisible] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  // const [currentFieldSetting, setCurrentFieldSetting] = useState<FormItemProps>();
  const [currentField, setCurrentField] = useState<number>();
  const [nextQueue, setNextQueue] = useState<FormItemProps[][]>([]);
  const [prevQueue, setPrevQueue] = useState<FormItemProps[][]>([]);
  const [mode, setMode] = useState<'view' | 'create' | 'edit'>('view');
  const [formFields, _setFormFields] = useState<FormItemProps[]>([]);
  const [code, setCode] = useState<string>();
  const [editor, setEditor] = useState<monacoEditor.editor.IStandaloneCodeEditor>();

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

  const formatFormFields = (fields: FormItemProps[]) => {
    _setFormFields([
      ...fields.map((row) => {
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
    setCode(JSON.stringify(fields, null, 2));
  };

  const setInitialState = useCallback((fields: FormItemProps[]) => {
    setComponentVisible(true);
    setSettingVisible(false);
    setCodeVisible(false);
    setFullscreen(false);
    setCurrentField(undefined);
    setNextQueue([]);
    setPrevQueue([]);
    setMode('view');
    formatFormFields(fields);
  }, []);

  const setHistory = (list: FormItemProps[], flag?: boolean) => {
    // console.log(prevQueue[prevQueue.length-1], list);
    if (
      prevQueue.length > 0 &&
      JSON.stringify(prevQueue[prevQueue.length - 1]) === JSON.stringify(list)
    ) {
      return;
    }
    if (flag !== false) {
      setCode(JSON.stringify(list, null, 2));
    }
    setPrevQueue([...prevQueue, list]);
  };

  const setFormFields = (newState: FormItemProps[], flag?: boolean) => {
    _setFormFields(newState);
    const history = newState.map((field) => ({
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
    setHistory(history, flag);
  };

  const doPrev = () => {
    if (prevQueue === undefined || prevQueue.length <= 1) {
      return;
    }

    const next = prevQueue.pop();
    if (next === undefined) {
      return;
    }
    if (prevQueue.length > 0) {
      formatFormFields(prevQueue[prevQueue.length - 1]);
    }
    setPrevQueue([...prevQueue]);
    setNextQueue([...nextQueue, next]);
  };

  const doNext = () => {
    if (nextQueue === undefined || nextQueue.length === 0) {
      return;
    }

    const prev = nextQueue.pop();
    if (prev === undefined) {
      return;
    }
    formatFormFields(prev);
    setNextQueue([...nextQueue]);
    setPrevQueue([...prevQueue, prev]);
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

  const codeTrigger = (insertCode?: string, id?: number) => {
    if (insertCode !== undefined && id) {
      // isjson
      try {
        if (code) {
          setCode(
            JSON.stringify(
              JSON.parse(code).map((row: any) => {
                if (row.id === id) {
                  return {
                    ...row,
                    field: {
                      ...row?.field,
                      props: {
                        ...row?.field?.props,
                        [insertCode]: {},
                      },
                    },
                  };
                }

                return row;
              }),
              null,
              2,
            ),
          );
        }
      } catch {
        // error
      }
      console.log(code, insertCode, id);
      // setCode();
    }

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
    // setCurrentFieldSetting(field);
    setCurrentField(field.id);
    if (settingVisible) {
      return;
    }
    setSettingVisible(true);
  };

  const updateSetting = (value: any) => {
    setFormFields([
      ...formFields.map((row) => {
        // if (row.id === currentFieldSetting.id) {
        if (row.id === currentField) {
          return {
            ...row,
            [row.type]: {
              ...row[row.type],
              ...value[row.type],
            },
            'Form.Item': {
              ...row['Form.Item'],
              ...value['Form.Item'],
            },
          };
        }

        return row;
      }),
    ]);
  };

  const deleteField = (id: any) => {
    setFormFields([...formFields.filter((row) => row.id !== id)]);
    settingTrigger();
  };

  const copyField = (id: any) => {
    setFormFields([
      ...formFields,
      ...formFields
        .filter((row) => {
          return row.id === id;
        })
        .map((row) => {
          const newid = createId();
          return {
            ...row,
            id: newid,
            'Form.Item': {
              ...row['Form.Item'],
              name: `${row.type}_${newid}`,
            },
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
      setFormFields(
        [
          ...JSON.parse(value).map((row: any) => {
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
        ],
        false,
      );
      // message.success('配置已生效');
    } catch {
      // message.error('格式错误');
    }
  };

  return {
    formFields,
    code,
    componentVisible,
    settingVisible,
    codeVisible,
    fullscreen,
    currentField,
    nextQueue,
    prevQueue,
    mode,
    setComponentVisible,
    setSettingVisible,
    setCodeVisible,
    setFullscreen,
    setNextQueue,
    setPrevQueue,
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
    formatFormFields,
    setInitialState,
    componentsTrigger,
    editor,
    setEditor,
  };
};
