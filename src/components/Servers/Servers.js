import React from 'react';
import { StyledNav } from './Servers.style';
function Servers(props) {
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

export default Servers;
