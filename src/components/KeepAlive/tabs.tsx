import React, { useState, useEffect } from 'react';
import { Affix, Tabs } from 'antd';
import { useHistory, useLocation, useIntl, useAliveController } from 'umi';
import styles from './tabs.less';

const KeepAliveTabs: React.FC<{ tabBarExtraContent?: React.ReactNode }> = ({
  tabBarExtraContent,
}) => {
  const [activeKey, setActiveKey] = useState<string>();
  const { dropScope, getCachingNodes } = useAliveController();
  const intl = useIntl();
  const history = useHistory();
  const location = useLocation();
  const cachingNodes = getCachingNodes();

  useEffect(() => {
    setActiveKey(
      cachingNodes
        ?.filter(
          (node: any) => node.name.split('|').pop() === `${location.pathname}${location.search}`,
        )
        ?.pop()?.name,
    );
  }, [cachingNodes, location.pathname, location.search]);

  const handleTabClick = (key: string, event: any) => {
    event.preventDefault();
    const [, path] = key.split('|');
    history.push(path);
  };

  const handleEdit = (targetKey: any, action: 'add' | 'remove') => {
    if (action !== 'remove') {
      return;
    }

    if (location.pathname === targetKey.split('|').pop()) {
      const unlisten = history.listen(() => {
        unlisten();
        setTimeout(() => {
          dropScope(targetKey);
        }, 60);
      });

      // 前往排除当前 node 后的最后一个 tab
      const lastTab = cachingNodes?.filter((node: any) => node.name !== targetKey)?.pop()?.name;
      if (lastTab) {
        const [, path] = lastTab.split('|');
        history.push(path);
      } else {
        history.push('/');
      }
    } else {
      dropScope(targetKey);
    }
  };

  return (
    <Affix offsetTop={0} className={styles.Affix}>
      <Tabs
        className={styles.Tabs}
        type="editable-card"
        hideAdd
        onEdit={handleEdit}
        onTabClick={handleTabClick}
        tabBarExtraContent={tabBarExtraContent}
        activeKey={activeKey}
      >
        {cachingNodes.map((node: any) => {
          const [route] = node.name.split('|');
          const pathSnippets = route.split(/\/(?!:[^:/]+)/).filter((i: string) => i);
          const tab = intl.formatMessage({
            id: `menu.${pathSnippets
              .slice(0, pathSnippets.length)
              .join('.')
              .replace(/\/:[^:/.]+/g, '')}`,
          });
          return <Tabs.TabPane key={node.name} tab={tab} />;
        })}
      </Tabs>
    </Affix>
  );
};

export default KeepAliveTabs;
