import React, { useEffect, useState } from 'react';
import { UserPanelSection } from './UserPanel.style';
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
  return (
    <UserPanelSection>
      <ul>
        {currentUsers.map((x) => (
          <li key={x.uid}>
            <p>
              <span>{x.isOnline ? 'ON ' : 'OFF '}</span>
              {x.email}
            </p>
          </li>
        ))}
      </ul>
    </UserPanelSection>
  );
}

export default UserPanel;
