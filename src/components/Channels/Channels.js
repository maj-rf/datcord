import React, { useEffect, useState } from 'react';
import { ChannelSection } from './Channels.style';
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import { updateDoc, doc, onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';
function Channels({ servers }) {
  const { logOut, user } = useUserAuth();
  const [currentUsers, setCurrentUsers] = useState([]);
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

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'users'), (snapshot) => {
      setCurrentUsers(snapshot.docs.map((doc) => doc.data()));
    });
    return unsub;
  }, []);

  return (
    <ChannelSection>
      <div>
        <div className="channel-head">
          <h3>{servers[0]?.name}</h3>
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
      <div className="user-div">
        <p>{[...currentUsers].filter((x) => x.uid === user.uid)[0]?.name}</p>
        {/* ^ checks if user.email exists and show if true */}
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </ChannelSection>
  );
}

export default Channels;
