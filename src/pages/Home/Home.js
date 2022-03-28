import React, { useState, useEffect } from 'react';
import Servers from '../../components/Servers/Servers';
import Channels from '../../components/Channels/Channels';
import UserPanel from '../../components/UserPanel/UserPanel';
import styled from 'styled-components';
import { useUserAuth } from '../../context/UserAuthContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase-config';

import { Outlet } from 'react-router-dom';
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export default function Home({ toggleTheme, servers, serverChannels }) {
  const [currentUser, setCurrentUser] = useState([]);
  const { user } = useUserAuth();
  useEffect(() => {
    const unsub = onSnapshot(doc(db, `users/${user.uid}`), (snapshot) => {
      setCurrentUser(snapshot.data());
    });
    return () => unsub();
  }, [user]);

  return (
    <Wrapper>
      <Servers toggleTheme={toggleTheme} servers={servers}></Servers>
      <Channels
        servers={servers}
        serverChannels={serverChannels}
        currentUser={currentUser}
      />
      <Outlet context={[currentUser, setCurrentUser]} />
      <UserPanel />
    </Wrapper>
  );
}
