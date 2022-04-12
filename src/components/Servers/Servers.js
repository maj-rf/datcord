import React from 'react';
import { StyledNav } from './Servers.style';
import { LightBtn, DarkBtn } from './Servers.style';
function Servers({ theme, toggleTheme, servers, showLeft }) {
  return (
    <StyledNav showLeft={showLeft}>
      <ul>
        <li>
          <button onClick={toggleTheme}>
            {theme === 'light' ? <DarkBtn size="30" /> : <LightBtn size="30" />}
          </button>
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
