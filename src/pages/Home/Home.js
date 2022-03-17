import Sidebar from '../../components/Sidebar/Sidebar';
import Channels from '../../components/Channels/Channels';
import ChatPanel from '../../components/ChatPanel/ChatPanel';
import UserPanel from '../../components/UserPanel/UserPanel';
import { useUserAuth } from '../../context/UserAuthContext';

export default function Home({ toggleTheme }) {
  const { user } = useUserAuth();

  return (
    <>
      <Sidebar toggleTheme={toggleTheme} />
      <Channels />
      <ChatPanel />
      <UserPanel />
    </>
  );
}
