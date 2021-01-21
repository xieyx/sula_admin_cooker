import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import {
  Space,
  Divider,
  Layout,
  Menu,
  Tooltip,
  Button,
  Form as AForm,
  notification,
  message,
} from 'antd';
import {
  FormOutlined,
  EyeOutlined,
  AppstoreOutlined,
  CodeOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  RollbackOutlined,
} from '@ant-design/icons';
import MonacoEditor from 'react-monaco-editor';
import type { FormItemProps } from './Form.d';
import { createId } from './Form.d';
import Components from './Components';
import Form from './Form';
import Setting from './Setting';
import styles from './Workspace.less';

export type WorkspaceProps = {
  id?: string;
  componentName?: string;
  componentChildren?: React.ReactNode;
  [propName: string]: any;
};

const Workspace: React.FC<WorkspaceProps> = ({ id, saveForm, getForm }) => {
  const [codeForm] = AForm.useForm();
  const [componentVisible, setComponentVisible] = useState<boolean>(true);
  const [settingVisible, setSettingVisible] = useState<boolean>(false);
  const [codeVisible, setCodeVisible] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [currentFieldSetting, setCurrentFieldSetting] = useState<FormItemProps>();
  const [changedFieldSetting, setChangedFieldSetting] = useState();
  const [allFieldSetting, setAllFieldSetting] = useState<FormItemProps[]>();
  const [deletedField, setDeletedField] = useState<number>();
  const [copiedField, setCopiedField] = useState<number>();
  const [historyRecord, setHistoryRecord] = useState<number>(1);
  const [codeView, setCodeView] = useState<number>(1);
  const [nextQueue, setNextQueue] = useState<FormItemProps[][]>([]);
  const [prevQueue, setPrevQueue] = useState<FormItemProps[][]>([]);
  const [mode, setMode] = useState<'view' | 'create' | 'edit'>('view');

  useEffect(() => {
    if (id === undefined || getForm === undefined) {
      return;
    }
    (async () => {
      const currentForm = await getForm(id);
      try {
        setAllFieldSetting(JSON.parse(currentForm?.data?.fields));
      } catch (e) {
        // request error
      }
    })();
  }, [getForm, id]);

  const setHistory = (list: FormItemProps[]) => {
    const fields = JSON.stringify(list, null, 2);
    if (codeView && fields === codeForm.getFieldValue('fields')) {
      return;
    }
    if (codeView) {
      codeForm.setFieldsValue({ fields });
    }
    if (historyRecord) {
      setPrevQueue([...prevQueue, list]);
    }
    setHistoryRecord(1);
    setCodeView(1);
    setChangedFieldSetting(undefined);
    setAllFieldSetting(undefined);
    setDeletedField(undefined);
    setCopiedField(undefined);
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
    setCurrentFieldSetting(field);
    if (settingVisible) {
      return;
    }
    setSettingVisible(true);
  };

  const handleMenu = (event: any) => {
    switch (event.key) {
      case 'components':
        setCodeVisible(false);
        setTimeout(() => {
          setComponentVisible(!componentVisible);
        }, 200);
        break;
      case 'code':
        setComponentVisible(false);
        setTimeout(() => {
          setCodeVisible(!codeVisible);
        }, 200);
        break;
      default:
    }
  };

  const codeConfirm = (value: any) => {
    setCodeView(0);
    try {
      if (
        prevQueue.length === 0 ||
        JSON.stringify(prevQueue[prevQueue.length - 1]) !== JSON.stringify(JSON.parse(value.fields))
      ) {
        setHistoryRecord(1);
        setAllFieldSetting(JSON.parse(value.fields));
        message.success('配置已生效');
      } else {
        setHistoryRecord(0);
      }
    } catch (e) {
      // not json
      message.error('格式错误');
      setHistoryRecord(0);
    }
  };

  const updateSetting = (value: any) => {
    setChangedFieldSetting(value);
    setHistoryRecord(1);
    setCodeView(1);
  };

  return (
    <Layout className={fullscreen ? styles.Fullscreen : styles.Normalscreen}>
      <Layout.Header className={styles.Header}>
        <div className="ant-pro-global-header">
          <Space size="middle" style={{ flex: '1 1 0%' }}>
            表单编辑器
          </Space>
          <Space size="middle">
            <Tooltip title="预览模式">
              <EyeOutlined
                className={mode === 'edit' ? styles.Chosen : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  setMode('edit');
                  setComponentVisible(false);
                  setCodeVisible(false);
                  setSettingVisible(false);
                }}
              />
            </Tooltip>
            <Tooltip title="编辑模式">
              <FormOutlined
                className={mode === 'view' ? styles.Chosen : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  setMode('view');
                  if (codeVisible) {
                    setCodeVisible(false);
                    setTimeout(() => {
                      setComponentVisible(true);
                    }, 200);
                  } else {
                    setComponentVisible(true);
                  }
                }}
              />
            </Tooltip>
            <Tooltip title="后退">
              <RollbackOutlined
                className={prevQueue.length <= 1 ? styles.Disabled : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  if (prevQueue === undefined || prevQueue.length <= 1) {
                    return;
                  }

                  const next = prevQueue.pop();
                  if (next === undefined) {
                    return;
                  }
                  setHistoryRecord(0);
                  setCodeView(1);
                  setAllFieldSetting(prevQueue.length > 0 ? prevQueue[prevQueue.length - 1] : []);
                  setPrevQueue([...prevQueue]);
                  setNextQueue([...nextQueue, next]);
                }}
              />
            </Tooltip>
            <Tooltip title="前进">
              <RollbackOutlined
                style={{ transform: 'rotateY(180deg)' }}
                className={nextQueue.length === 0 ? styles.Disabled : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  if (nextQueue === undefined || nextQueue.length === 0) {
                    return;
                  }

                  const prev = nextQueue.pop();
                  if (prev === undefined) {
                    return;
                  }
                  setHistoryRecord(0);
                  setCodeView(1);
                  setAllFieldSetting(prev);
                  setNextQueue([...nextQueue]);
                  setPrevQueue([...prevQueue, prev]);
                }}
              />
            </Tooltip>
            <Divider type="vertical" />
            {!fullscreen ? (
              <Tooltip title="全屏">
                <FullscreenOutlined
                  onClick={(event) => {
                    event.preventDefault();
                    setFullscreen(true);
                  }}
                />
              </Tooltip>
            ) : (
              <Tooltip title="退出全屏">
                <FullscreenExitOutlined
                  onClick={(event) => {
                    event.preventDefault();
                    setFullscreen(false);
                  }}
                />
              </Tooltip>
            )}
            <Divider type="vertical" />
            <Button
              type="primary"
              onClick={(event) => {
                event.preventDefault();
                if (saveForm) {
                  (async () => {
                    const response = await saveForm({
                      id: id || createId().toLocaleString(),
                      fields: JSON.stringify(prevQueue[prevQueue.length - 1]),
                    });
                    if (response && response.errorCode === 0) {
                      notification.success({
                        message: `保存成功`,
                      });
                      history.push('/list');
                    }
                  })();
                }
              }}
            >
              保存
            </Button>
          </Space>
        </div>
      </Layout.Header>
      <Layout>
        {mode === 'view' && (
          <Menu
            mode="inline"
            inlineCollapsed
            className={styles.Menu}
            onClick={handleMenu}
            selectedKeys={[
              ...(componentVisible ? ['components'] : []),
              ...(codeVisible ? ['code'] : []),
            ]}
          >
            <Menu.Item key="components" icon={<AppstoreOutlined />}>
              组件
            </Menu.Item>
            <Menu.Item key="code" icon={<CodeOutlined />}>
              代码
            </Menu.Item>
          </Menu>
        )}
        <Layout.Sider
          collapsible
          collapsed={!codeVisible}
          // style={{display: codeVisible ? 'block' : 'none'}}
          width={settingVisible ? 'calc(50% - 174px)' : 'calc(50% - 24px)'}
          collapsedWidth={0}
          trigger={null}
          className={styles.Code}
        >
          <AForm form={codeForm} onFinish={codeConfirm} style={{ height: '100%' }}>
            <AForm.Item name="fields" noStyle>
              <MonacoEditor
                width="100%"
                height="100%"
                language="json"
                theme="vs"
                options={{
                  selectOnLineNumbers: true,
                  roundedSelection: false,
                  readOnly: false,
                  cursorStyle: 'line',
                  automaticLayout: true,
                  minimap: {
                    enabled: false,
                  },
                }}
                // value={code}
                // options={options}
                // onChange={::this.onChange}
                // editorDidMount={::this.editorDidMount}
              />
            </AForm.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ position: 'absolute', bottom: '10px', right: '10px' }}
            >
              确定
            </Button>
          </AForm>
        </Layout.Sider>
        <Layout.Sider
          collapsible
          collapsed={!componentVisible}
          collapsedWidth={0}
          trigger={null}
          className={styles.Components}
          // style={{display: componentVisible ? 'block' : 'none'}}
        >
          <Components
            sortableProps={{
              group: {
                name: 'shared',
                pull: 'clone',
                put: false,
              },
              clone: (item: any) => ({ ...item, id: createId() }),
              animation: 150,
              sort: false,
              // handle: '.ant-form-item-label',
            }}
          />
        </Layout.Sider>
        <Layout.Content className={styles.Main} data-mode={mode}>
          <Form
            sortable
            sortableProps={{
              group: { name: 'shared', pull: 'clone' },
              animation: 150,
              // handle: '.ant-form-item-label',
              className: styles.SortableBox,
            }}
            mode={mode}
            settingTrigger={settingTrigger}
            // codeView={(fields) => {
            //   codeForm.setFieldsValue({fields});
            // }}
            changedFieldSetting={changedFieldSetting}
            allFieldSetting={allFieldSetting}
            deletedField={deletedField}
            copiedField={copiedField}
            setHistory={setHistory}
          />
        </Layout.Content>
        <Layout.Sider
          collapsible
          collapsed={!settingVisible}
          collapsedWidth={0}
          width={300}
          trigger={null}
          className={styles.Setting}
          // style={{display: settingVisible ? 'block' : 'none'}}
        >
          {currentFieldSetting && (
            <Setting
              id={currentFieldSetting.id}
              type={currentFieldSetting.type}
              onFinish={
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                (values: any) => {
                  // console.log(values)
                }
              }
              setVisible={settingTrigger}
              updateSetting={updateSetting}
              setDeletedField={setDeletedField}
              setCopiedField={setCopiedField}
              openCode={codeTrigger}
              currentFieldSetting={prevQueue[prevQueue.length - 1]}
            />
          )}
        </Layout.Sider>
      </Layout>
    </Layout>
  );
};

export default Workspace;
