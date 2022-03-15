import { UserPanelSection } from './UserPanel.style';

import React from 'react';

function UserPanel({ user }) {
  return (
    <UserPanelSection>
      <ul>
        <h3>Online</h3>
        <li>
          <p>{user?.email}</p>
        </li>
        <li>
          <p>User</p>
        </li>
        <li>
          <p>User</p>
        </li>
        <li>
          <p>User</p>
        </li>
      </ul>
      <ul>
        <h3>Offline</h3>
        <li>User</li>
        <li>User</li>
        <li>User</li>
        <li>User</li>
      </ul>
    </UserPanelSection>
  );
}

export default UserPanel;
