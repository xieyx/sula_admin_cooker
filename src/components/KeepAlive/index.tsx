import React from 'react';
import { KeepAlive, withRouter } from 'umi';

const withKeepAlive = (Component: React.ComponentType<any>) => {
  return withRouter((props) => (
    <KeepAlive
      name={`${props.match.path}|${props.location.pathname}${props.location.search}`}
      id={`${JSON.stringify(props.match.params)}|${props.location.search}`}
      saveScrollPosition="screen"
    >
      <Component {...props} />
    </KeepAlive>
  ));
};

export default withKeepAlive;
