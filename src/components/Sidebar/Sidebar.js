import React from 'react';
import { StyledNav } from './Sidebar.style';
function Sidebar(props) {
  return (
    <StyledNav>
      <ul>
        <li>
          <button onClick={props.toggleTheme}>Mode</button>
        </li>
        <li>
          <button>Click</button>
        </li>
        <li>
          <button>Click</button>
        </li>
        <li>
          <button>Click</button>
        </li>
        <li>
          <button>Click</button>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Sidebar;
