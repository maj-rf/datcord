import React from 'react';
import { StyledNav } from './Servers.style';
function Servers({ toggleTheme, servers }) {
  return (
    <StyledNav>
      <ul>
        <li>
          <button onClick={toggleTheme}>Mode</button>
        </li>
        {servers.map((server) => (
          <li key={server.id}>
            <button>{server.name}</button>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
}

export default Servers;
