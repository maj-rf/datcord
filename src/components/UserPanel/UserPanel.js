import React from 'react';
import { UserPanelSection } from './UserPanel.style';
import User from '../User/User';

function UserPanel({ allUsers }) {
  const online = [...allUsers].filter((user) => user.isOnline);
  const offline = [...allUsers].filter((user) => user.isOnline === false);
  return (
    <UserPanelSection>
      <div>
        <p>ONLINE - {online.length}</p>
        {online.map((x) => (
          <User key={x.uid} x={x}></User>
        ))}
      </div>
      <div>
        <p>OFFLINE - {offline.length}</p>
        {offline.map((x) => (
          <User key={x.uid} x={x} offline></User>
        ))}
      </div>
    </UserPanelSection>
  );
}

export default UserPanel;
