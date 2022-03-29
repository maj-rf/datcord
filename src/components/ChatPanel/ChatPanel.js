import React, { useEffect, useState } from 'react';
import { ChatSection } from './ChatPanel.style';
import { useOutletContext, useParams } from 'react-router-dom';
import {
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../firebase-config';
import profileImage from '../../assets/pp-svg.svg';

export default function ChatPanel({ serverChannels }) {
  let { channelId = 'Rmg6sdx6RiQViG29nWpv' } = useParams();
  const [channelMsgs, setChannelMsgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentChannel = [...serverChannels].filter((x) => x.id === channelId);
  const [message, setMessage] = useState('');
  const [currentUser] = useOutletContext(); //context hook from Outlet
  useEffect(() => {
    setLoading(true);
    const messageRef = collection(
      db,
      `servers/1kU49xyjRsrEE6KlUXub/channels/${channelId}`,
      'messages'
    );
    const q = query(messageRef, orderBy('createdAt', 'asc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setChannelMsgs(data);
      setLoading(false);
    });
    return () => unsub();
  }, [channelId]);

  function handleChange(e) {
    setMessage(e.target.value);
  }

  async function sendMessage(e) {
    e.preventDefault();
    try {
      await addDoc(
        collection(
          db,
          `servers/1kU49xyjRsrEE6KlUXub/channels/${channelId}`,
          'messages'
        ),
        {
          ownerName: currentUser.name,
          ownerId: currentUser.uid,
          content: message,
          createdAt: serverTimestamp(),
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ChatSection>
      <div className="channel-name">
        <h3># {currentChannel[0]?.name}</h3>
      </div>
      <ul>
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            Loading...
          </div>
        ) : (
          <>
            <h1>Welcome to #{currentChannel[0]?.name}</h1>
            {channelMsgs.map((msg) => {
              return (
                <li key={msg.ownerId + msg.createdAt}>
                  <div className="img-container">
                    <img src={profileImage} alt={msg.ownerName + 'image'} />
                  </div>
                  <div>
                    <h3>{msg.ownerName}</h3>
                    <p>{msg.content}</p>
                  </div>
                </li>
              );
            })}
          </>
        )}
      </ul>
      <div className="msg-container">
        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Message..."
            onChange={handleChange}
            value={message}
          />
        </form>
      </div>
    </ChatSection>
  );
}
