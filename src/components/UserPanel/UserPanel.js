import { UserPanelSection } from './UserPanel.style';

import React from 'react';

function UserPanel() {
  return (
    <UserPanelSection>
      <ul>
        <h3>Online</h3>
        <li>User</li>
        <li>User</li>
        <li>User</li>
        <li>User</li>
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
