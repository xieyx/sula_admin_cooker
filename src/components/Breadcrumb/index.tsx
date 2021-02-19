import React from 'react';
import { Link, useIntl } from 'umi';

const itemRender = (route: any, params: any, routes: any, paths: any) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={`/${paths.join('/')}`}>{route.breadcrumbName}</Link>
  );
};

export type BreadcrumbProps = {
  path?: string;
  params?: any;
};

export default (match?: BreadcrumbProps) => {
  const intl = useIntl();
  const query = match?.params || {};
  const pathSnippets = match?.path?.split(/\/(?!:[^:/]+)/)?.filter((i: string) => i);
  const routes = pathSnippets?.map((path: any, index: number) => ({
    path: path.replace(/:[^:/]+/, ($m: string) => query[$m.substr(1)]),
    breadcrumbName: intl.formatMessage({
      id: `menu.${pathSnippets
        .slice(0, index + 1)
        .join('.')
        .replace(/\/:[^:/.]+/g, '')}`,
    }),
  }));

  return {
    itemRender,
    routes: [
      {
        path: '/',
        breadcrumbName: intl.formatMessage({ id: 'menu.home' }),
      },
    ].concat(routes || []),
  };
};
