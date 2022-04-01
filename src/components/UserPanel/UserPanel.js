import React from 'react';
import { UserPanelSection } from './UserPanel.style';
import User from '../User/User';

function UserPanel({ allUsers }) {
  const online = [...allUsers].filter((user) => user.isOnline);
  const offline = [...allUsers].filter((user) => user.isOnline === false);
  return (
    <UserPanelSection>
      <div>
        <h3>Online</h3>
        {online.map((x) => (
          <User key={x.uid} x={x}></User>
        ))}
      </div>
      <div>
        <h3>Offline</h3>
        {offline.map((x) => (
          <User key={x.uid} x={x}></User>
        ))}
      </div>
    </UserPanelSection>
  );
}

export default UserPanel;
