
import React from 'react';

import style from './ReduxComponent.css';

const ReduxComponent = (props) => {
  const { value1 } = props;

  return (<div>{value1}</div>)
};

export default ReduxComponent;