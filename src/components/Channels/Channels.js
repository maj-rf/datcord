import React from 'react';
import { ChannelSection } from './Channels.style';
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';
function Channels() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      await updateDoc(doc(db, 'users', user.uid), {
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
          <h3>Playground</h3>
        </div>

        <ul>
          <span>v Text Channel</span>
          <li>
            <span>#</span> general
          </li>
          <li>
            <span>#</span> spam-city
          </li>
          <li>
            <span>#</span> off-topic
          </li>
          <li>
            <span>#</span> channel
          </li>
        </ul>

        <ul>
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
        </ul>
      </div>
      <div>
        <p>{user && user.email}</p>
        {/* ^ checks if user.email exists and show if true */}
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </ChannelSection>
  );
}

export default Channels;
