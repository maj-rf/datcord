import React from 'react';
import { StyledNav } from './Servers.style';
function Servers({ toggleTheme, servers, changeServer }) {
  return (
    <StyledNav>
      <ul>
        <li>
          <button onClick={toggleTheme}>Mode</button>
        </li>
        {servers.map((server) => (
          <li key={server.id} onClick={(e) => changeServer(e, server.id)}>
            {server.name}
          </li>
        ))}
      </ul>
    </StyledNav>
  );
}

export default Servers;
