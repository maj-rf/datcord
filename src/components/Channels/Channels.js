import React, { useEffect, useState } from 'react';
import { ChannelSection } from './Channels.style';
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate, NavLink } from 'react-router-dom';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { data } from '../../data';
function Channels({ servers }) {
  const { logOut, user } = useUserAuth();
  const [currentUser, setCurrentUser] = useState([]);
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

  useEffect(() => {
    const unsub = onSnapshot(doc(db, `users/${user.uid}`), (snapshot) => {
      setCurrentUser(snapshot.data());
    });
    return () => unsub();
  }, [user]);

  return (
    <ChannelSection>
      <div>
        <div className="channel-head">
          <h3>{servers[0]?.name}</h3>
        </div>

        <ul>
          <span>v Text Channel</span>
          {data.map((channel) => (
            <li key={channel.id}>
              <NavLink to={`/home/${channel.id}`}>
                <span>#</span> {channel.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* <ul>
          <span>v Gaming</span>
          <li>
            <span>#</span> Switch
          </li>
          <li>
            <span>#</span> PS
          </li>
          <li>
            <span>#</span> Xbox
          </li>
          <li>
            <span>#</span> PC
          </li>
        </ul> */}
      </div>
      <div className="user-div">
        <p>{currentUser.name}</p>
        {/* ^ checks if user.email exists and show if true */}
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </ChannelSection>
  );
}

export default Channels;
