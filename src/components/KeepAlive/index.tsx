import React from 'react';
import { KeepAlive, withRouter } from 'umi';

// export default ({ route, children }: { route: any, children: React.ReactNode }) => {
//   const location = useLocation();
//   return (
//   <KeepAlive name={route.path} path={location.pathname} saveScrollPosition="screen">
//     {children}
//   </KeepAlive>
// )};

const withKeepAlive = (Component: React.ComponentType<any>) => {
  // {withRouter((_props) => <Component {..._props} />)}
  return withRouter((props) => (
    <KeepAlive
      name={`${props.match.path}|${props.location.pathname}`}
      id={JSON.stringify(props.match.params)}
      saveScrollPosition="screen"
    >
      <Component {...props} />
    </KeepAlive>
  ));
};

export default withKeepAlive;
