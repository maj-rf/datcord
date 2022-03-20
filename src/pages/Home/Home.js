import Servers from '../../components/Servers/Servers';
import Channels from '../../components/Channels/Channels';
import ChatPanel from '../../components/ChatPanel/ChatPanel';
import UserPanel from '../../components/UserPanel/UserPanel';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase-config';
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export default function Home({ toggleTheme }) {
  const [servers, setServers] = useState([]);
  const [currentServer, setCurrentServer] = useState({});
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'servers'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setServers(data);
      setCurrentServer(data[0]);
    });
    return unsub;
  }, []);

  async function changeServer(e, id) {
    const newServer = [...servers].filter((server) => server.id === id);
    setCurrentServer(newServer);
  }

  return (
    <Wrapper>
      <Servers
        toggleTheme={toggleTheme}
        servers={servers}
        changeServer={changeServer}
      ></Servers>
      <Channels currentServer={currentServer} />
      <ChatPanel />
      <UserPanel />
    </Wrapper>
  );
}
