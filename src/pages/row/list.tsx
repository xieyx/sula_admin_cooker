import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { PageHeader, Button, Space, Table, Popconfirm, notification } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import useBreadcrumb from '@/components/Breadcrumb';
import { getAllForm, removeForm } from './services';
import styles from './list.less';

const RowList: React.FC<{ match: any }> = ({ match }) => {
  const [list, setList] = useState<any[]>();
  const [refreshTable, setRefreshTable] = useState<boolean>(true);
  const breadcrumb = useBreadcrumb(match);
  // const tableRef = React.createRef<any>();

  // useActivate(() => {
  //   setRefreshTable(true);
  // });

  useEffect(() => {
    if (refreshTable === false) {
      return;
    }

    (async () => {
      const res = await getAllForm();
      setList(res?.data);

      setRefreshTable(false);
    })();
  }, [refreshTable]);

  return (
    <PageHeader
      title="列表"
      className="site-page-header"
      breadcrumb={breadcrumb}
      extra={[
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          key="1"
          onClick={(event) => {
            event.preventDefault();
            history.push('/list/create');
          }}
        >
          添加
        </Button>,
      ]}
    >
      <Table
        loading={refreshTable}
        scroll={{ x: true }}
        className={styles.list}
        rowKey="id"
        dataSource={list}
        columns={[
          {
            key: 'id',
            title: 'ID',
            dataIndex: 'id',
            render: (text: string) => (
              <Button
                type="link"
                onClick={(e) => {
                  e.preventDefault();
                  history.push(`/list/info?id=${text}`);
                }}
              >
                {text}
              </Button>
            ),
          },
          {
            key: 'action',
            title: '操作',
            fixed: 'right',
            width: 100,
            render: (text: any, record: any) => (
              <Space>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/list/edit?id=${record.id}`);
                  }}
                />
                <Popconfirm
                  title="是否删除?"
                  onConfirm={(e) => {
                    e?.preventDefault();
                    (async () => {
                      const res = await removeForm(record.id);
                      if (res.errorCode === 0) {
                        notification.success({ message: '删除成功' });
                        setRefreshTable(true);
                      }
                    })();
                  }}
                  // onCancel={cancel}
                  okText="确定"
                  cancelText="取消"
                >
                  <Button type="primary" shape="circle" danger icon={<DeleteOutlined />} />
                </Popconfirm>
              </Space>
            ),
          },
        ]}
      />
    </PageHeader>
  );
};

export default RowList;
