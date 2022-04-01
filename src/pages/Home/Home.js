import React, { useState, useEffect } from 'react';
import Servers from '../../components/Servers/Servers';
import Channels from '../../components/Channels/Channels';
import UserPanel from '../../components/UserPanel/UserPanel';
import Profile from '../../components/Profile/Profile';
import styled from 'styled-components';
import { useUserAuth } from '../../context/UserAuthContext';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Outlet, useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export default function Home({ toggleTheme, servers, serverChannels }) {
  const [currentUser, setCurrentUser] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = onSnapshot(doc(db, `users/${user.uid}`), (snapshot) => {
      setCurrentUser(snapshot.data());
    });
    return () => unsub();
  }, [user]);

  const handleProfileView = () => setShowProfile((prevState) => !prevState);

  const handleLogOut = async () => {
    try {
      await logOut();
      await updateDoc(doc(db, 'users', `${user.uid}`), {
        isOnline: false,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper>
      {showProfile ? (
        <Profile
          handleProfileView={handleProfileView}
          handleLogOut={handleLogOut}
          currentUser={currentUser}
        />
      ) : (
        <>
          <Servers toggleTheme={toggleTheme} servers={servers}></Servers>
          <Channels
            servers={servers}
            serverChannels={serverChannels}
            currentUser={currentUser}
            handleProfileView={handleProfileView}
          />
          <Outlet context={[currentUser, setCurrentUser]} />
          <UserPanel />
        </>
      )}
    </Wrapper>
  );
}
