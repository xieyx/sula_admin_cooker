export default [
  {
    path: '/list/edit',
    name: 'form',
    hideInMenu: true,
    component: './row/formbuilder',
  },
  {
    path: '/list/create',
    name: 'form',
    hideInMenu: true,
    component: './row/formbuilder',
  },
  {
    path: '/list',
    name: 'list',
    icon: 'table',
    component: './row/list',
  },
  {
    path: '/',
    redirect: '/list',
  },
  {
    component: './404',
  },
];
