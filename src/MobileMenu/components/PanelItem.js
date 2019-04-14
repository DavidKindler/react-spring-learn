import React from 'react';

const PanelItem = props => {
  return <li style={{ paddingLeft: '10px' }}>{props.children}</li>;
};

export default PanelItem;
