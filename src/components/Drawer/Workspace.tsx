import React, { useState } from 'react';
import { useModel } from 'umi';
import { Space, Divider, Layout, Menu, Tooltip, Button } from 'antd';
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
import allSuggestions from './Suggestions';
import { createId } from './Form.d';
import Components from './Components';
import Form from './Form';
import Setting from './Setting';
import styles from './Workspace.less';

export type WorkspaceProps = {
  saveHandle: (event: React.MouseEvent) => void;
};

const Workspace: React.FC<WorkspaceProps> = ({ saveHandle }) => {
  const {
    setPreviewMode,
    setEditMode,
    doPrev,
    doNext,
    code,
    setCode,
    nextQueue,
    prevQueue,
    mode,
    codeVisible,
    componentVisible,
    settingVisible,
    codeConfirm,
    fullscreen,
    setFullscreen,
    codeTrigger,
    componentsTrigger,
    setEditor,
  } = useModel('form');

  const [handle, setHandle] = useState<NodeJS.Timeout | null>(null);

  const handleMenu = (event: any) => {
    switch (event.key) {
      case 'components':
        componentsTrigger();
        break;
      case 'code':
        codeTrigger();
        break;
      default:
    }
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
                  setPreviewMode();
                }}
              />
            </Tooltip>
            <Tooltip title="编辑模式">
              <FormOutlined
                className={mode === 'view' ? styles.Chosen : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  setEditMode();
                }}
              />
            </Tooltip>
            <Tooltip title="后退">
              <RollbackOutlined
                className={prevQueue.length <= 1 ? styles.Disabled : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  doPrev();
                }}
              />
            </Tooltip>
            <Tooltip title="前进">
              <RollbackOutlined
                style={{ transform: 'rotateY(180deg)' }}
                className={nextQueue.length === 0 ? styles.Disabled : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  doNext();
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
            <Button type="primary" onClick={saveHandle}>
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
          <MonacoEditor
            width="100%"
            height="100%"
            language="json"
            theme="vs"
            options={{
              quickSuggestions: false,
              fixedOverflowWidgets: true,
              selectOnLineNumbers: true,
              roundedSelection: false,
              readOnly: false,
              cursorStyle: 'line',
              automaticLayout: true,
              minimap: {
                enabled: false,
              },
              tabSize: 2,
            }}
            value={code}
            onChange={(value) => {
              setCode(value);
              if (handle !== null) {
                clearTimeout(handle);
              }
              setHandle(setTimeout(() => codeConfirm(value), 500));
            }}
            editorDidMount={(editor, monaco) => {
              setEditor(editor);
              let suggestions: any[] = [];
              let oldk: string = '';
              editor.onDidChangeModelContent((e) => {
                // console.log(e)
                const editorModel = editor.getModel();
                if (editorModel === null) {
                  return;
                }
                const lineContent = editorModel.getLineContent(e.changes[0].range.startLineNumber);
                const k = lineContent.replace(/\s*"([^"]+)".*$/, '$1');
                if (k.length === 0 || k === oldk) {
                  return;
                }

                oldk = k;
                if (allSuggestions[k]) {
                  suggestions = allSuggestions[k];
                }
              });
              monaco.languages.registerCompletionItemProvider('json', {
                provideCompletionItems: (model, position) => {
                  return {
                    suggestions: suggestions.map((item) => ({
                      ...item,
                      kind: monaco.languages.CompletionItemKind.Enum,
                      range: {
                        startLineNumber: position.lineNumber,
                        startColumn: position.column,
                        endLineNumber: position.lineNumber,
                        endColumn: position.column,
                      },
                    })),
                  };
                },
                triggerCharacters: ['"'],
              });
            }}
          />
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
              className: styles.SortableBox,
            }}
            mode={mode}
          />
        </Layout.Content>
        <Layout.Sider
          collapsible
          collapsed={!settingVisible}
          collapsedWidth={0}
          width={300}
          trigger={null}
          className={styles.Setting}
        >
          <Setting />
        </Layout.Sider>
      </Layout>
    </Layout>
  );
};

export default Workspace;
