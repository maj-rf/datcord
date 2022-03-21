import Servers from '../../components/Servers/Servers';
import Channels from '../../components/Channels/Channels';
// import ChatPanel from '../../components/ChatPanel/ChatPanel';
import UserPanel from '../../components/UserPanel/UserPanel';
import styled from 'styled-components';

import { Outlet } from 'react-router-dom';
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export default function Home({ toggleTheme, servers }) {
  return (
    <Wrapper>
      <Servers toggleTheme={toggleTheme} servers={servers}></Servers>
      <Channels servers={servers} />
      <Outlet />
      <UserPanel />
    </Wrapper>
  );
}
