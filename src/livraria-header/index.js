import React from 'react';
import MenuContainer from './menu-container';

const LivrariaHeader = (props) => {
  return (
    <div>
      <header>
        <MenuContainer/>
      </header>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default LivrariaHeader;