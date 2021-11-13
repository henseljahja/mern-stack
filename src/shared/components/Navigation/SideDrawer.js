import './SideDrawer.css';

import React from 'react';
import reactDom from 'react-dom';

const SideDrawer = props => {
  const content = <aside className="side-drawer">{props.children}</aside>;

  return reactDom.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
