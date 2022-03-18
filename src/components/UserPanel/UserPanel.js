import React, { useEffect, useState } from 'react';
import { UserPanelSection } from './UserPanel.style';
import User from './User';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
function UserPanel() {
  const [currentUsers, setCurrentUsers] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'users'), (snapshot) => {
      setCurrentUsers(snapshot.docs.map((doc) => doc.data()));
    });
    return unsub;
  }, []);

  const online = [...currentUsers].filter((user) => user.isOnline);
  const offline = [...currentUsers].filter((user) => user.isOnline === false);
  return (
    <UserPanelSection>
      <ul>
        <h3>Online</h3>
        {online.map((x) => (
          <User key={x.uid} x={x}></User>
        ))}
      </ul>
      <ul>
        <h3>Offline</h3>
        {offline.map((x) => (
          <User key={x.uid} x={x}></User>
        ))}
      </ul>
    </UserPanelSection>
  );
}

export default UserPanel;
