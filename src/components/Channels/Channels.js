import React from 'react';
import { ChannelSection } from './Channels.style';
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate, NavLink } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Channels({ servers, serverChannels, currentUser }) {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();

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
    <ChannelSection>
      <div>
        <div className="channel-head">
          <h3>{servers[0]?.name}</h3>
        </div>

        <ul>
          <span>v Text Channel</span>
          {serverChannels?.map((channel) => (
            <li key={channel.id}>
              <NavLink to={`/home/${channel.id}`}>
                <span>#</span> {channel.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="user-div">
        <p>{currentUser.name}</p>
        {/* ^ checks if user.name exists and show if true */}
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </ChannelSection>
  );
}

export default Channels;
